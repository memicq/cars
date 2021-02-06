package com.tetete.carapi.services.admin;

import com.tetete.carapi.models.tables.Tag;
import com.tetete.carapi.models.tables.TagRelation;
import com.tetete.carapi.models.views.admin.AdminTagView;
import com.tetete.carapi.repositories.admin.TagRelationRepository;
import com.tetete.carapi.repositories.admin.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TagService {

    @Autowired
    TagRepository tagRepository;
    @Autowired
    TagRelationRepository tagRelationRepository;

    @Transactional
    public List<AdminTagView> list() {
        List<Tag> parentTags = tagRepository.findAllByHasParent(false);
        return parentTags.stream()
                .map(AdminTagView::fromTag)
                .map(this::setChildrenToTagView)
                .collect(Collectors.toList());
    }

    @Transactional
    public Tag addTag(String tagName, Optional<Long> parentTagId) {
        return parentTagId.map(aLong -> addChildTag(tagName, aLong)).orElseGet(() -> addRootTag(tagName));
    }

    @Transactional
    public void removeTag(Long tagId) {
        tagRelationRepository.deleteByChildTagId(tagId);
        removeChildTags(tagId);
        tagRepository.deleteById(tagId);
    }

    @Transactional
    private void removeChildTags(Long parentTagId) {
        List<Long> childTagIds = tagRelationRepository.findAllByParentTagId(parentTagId)
                .stream()
                .map(TagRelation::getChildTagId)
                .collect(Collectors.toList());
        tagRelationRepository.deleteAllByParentTagId(parentTagId);
        childTagIds.forEach(tagId -> {
            removeChildTags(tagId);
            tagRepository.deleteById(tagId);
        });
    }

    private AdminTagView setChildrenToTagView(AdminTagView tagView) {
        List<Long> tagIds = tagRelationRepository.findAllByParentTagId(tagView.getId()).stream()
                .map(TagRelation::getChildTagId)
                .collect(Collectors.toList());
        List<AdminTagView> children = tagIds.stream()
                .map(tagRepository::findById)
                .flatMap(Optional::stream)
                .map(AdminTagView::fromTag)
                .map(view -> {
                    view.setParentTagId(tagView.getId());
                    return view;
                })
                .collect(Collectors.toList());
        tagView.setChildren(children);
        return tagView;
    }

    private Tag addChildTag(String tagName, Long parentTagId) {
        Timestamp current = Timestamp.valueOf(LocalDateTime.now());

        Tag tag = Tag.builder()
                .name(tagName)
                .hasParent(true)
                .sortNo(1)
                .createdAt(current)
                .createdBy(1L)
                .updatedAt(current)
                .updatedBy(1L)
                .build();
        Tag savedTag = tagRepository.save(tag);

        TagRelation relation = TagRelation.builder()
                .parentTagId(parentTagId)
                .childTagId(savedTag.getTagId())
                .createdAt(current)
                .updatedAt(current)
                .build();
        tagRelationRepository.save(relation);

        return savedTag;
    }

    private Tag addRootTag(String tagName) {
        Timestamp current = Timestamp.valueOf(LocalDateTime.now());
        Tag tag = Tag.builder()
                .name(tagName)
                .hasParent(false)
                .sortNo(1)
                .createdAt(current)
                .createdBy(1L)
                .updatedAt(current)
                .updatedBy(1L)
                .build();
        return tagRepository.save(tag);
    }
}

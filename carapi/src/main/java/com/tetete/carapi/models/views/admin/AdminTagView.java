package com.tetete.carapi.models.views.admin;

import com.tetete.carapi.models.tables.Tag;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminTagView {
    @NonNull private Long id;
    @NonNull private String name;
    private Long parentTagId;

    private List<AdminTagView> children = new ArrayList<>();

    public Optional<Long> getParentTagId() {
        return Optional.ofNullable(this.parentTagId);
    }

    public static AdminTagView fromTag(Tag tag) {
        return AdminTagView.builder()
                .id(tag.getTagId())
                .name(tag.getName())
                .children(new ArrayList<>())
                .build();
    }
}


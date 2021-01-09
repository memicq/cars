-- 作成するDB
-- - articles
-- - users
-- - tags
-- - search_conditions


create table articles (
  article_id bigint not null auto_increment comment '記事ID',
  title varchar(511) not null comment 'タイトル',
  description varchar(1023) comment '説明文',
  source_url varchar(2047) not null comment '動画URL',
  source_site enum('OTHER', 'PORNHUB', 'XVIDEOS') not null comment '動画サイト',
  is_published boolean not null comment '公開フラグ',
  view_count bigint not null comment '視聴回数',
  is_archived boolean not null comment 'アーカイブフラグ',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  updated_at datetime not null comment '更新日時',
  updated_by bigint not null comment '更新ユーザー',
  primary key (article_id)
) comment '記事';

create table users (
  user_id bigint not null auto_increment comment 'ユーザID',
  display_name varchar(255) not null comment 'ディズプレイ名',
  description varchar(2047) comment '説明',
  user_name varchar(255) not null comment 'ユーザ名',
  encrypted_password varchar(63) comment '符号化パスワード',
  created_at datetime not null comment '作成日時',
  updated_at bigint not null comment '更新日時',
  primary key (user_id)
) comment 'ユーザー';

create table search_conditions (
  search_condition_id bigint not null auto_increment comment '検索条件ID',
  title varchar(255) not null comment 'タイトル',
  description varchar(2047) comment '説明',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  updated_at bigint not null comment '更新日時',
  updated_by bigint not null comment '更新ユーザー',
  primary key (search_condition_id)
) comment '検索条件';

create table tags (
  tag_id bigint not null auto_increment comment 'タグID',
  name varchar(127) not null comment 'タグ名',
  node_type enum('ROOT', 'LEAF', 'NODE') not null comment 'ノード種類',
  sort_no int not null comment 'ソート順',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  updated_at bigint not null comment '更新日時',
  updated_by bigint not null comment '更新ユーザー',
  primary key (tag_id)
) comment 'タグ';

create table tag_relations (
  tag_relation_id bigint not null auto_increment comment 'タグ関連ID',
  parent_tag_id bigint not null comment '親タグID',
  child_tag_id bigint not null comment '小タグID',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  primary key (tag_relation_id),
  constraint `fk_parent_tag_tag_relation` foreign key (parent_tag_id) references tags (tag_id),
  constraint `fk_child_tag_tag_relation` foreign key (child_tag_id) references tags (tag_id)
) comment 'タグ関連';

create table tags_articles (
  tags_articles_id bigint not null auto_increment comment 'タグ記事関連ID',
  tag_id bigint not null comment 'タグID',
  article_id bigint not null comment '記事ID',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  primary key (tags_articles_id),
  constraint `fk_tags_articles_tag` foreign key (tag_id) references tags (tag_id),
  constraint `fk_tags_articles_article` foreign key (article_id) references articles (article_id)
) comment 'タグ記事関連';

create table comments (
  comment_id bigint not null auto_increment comment 'コメントID',
  user_id bigint not null comment 'ユーザーID',
  article_id bigint not null comment '記事ID',
  comment_body varchar(2047) not null comment '内容',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  primary key (comment_id),
  constraint `fk_comments_user` foreign key (user_id) references users (user_id),
  constraint `fk_comments_article` foreign key (article_id) references articles (article_id)
) comment 'コメント';

create table comment_replies (
  comment_reply_id bigint not null auto_increment comment 'コメント返信ID',
  replied_from_id bigint not null comment '返信元コメントID',
  replied_to_id bigint not null comment '返信先コメントID',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  primary key (comment_reply_id),
  constraint `fk_replied_from_comment_comment` foreign key (replied_from_id) references comments (comment_id),
  constraint `fk_replied_to_comment_comment` foreign key (replied_to_id) references comments (comment_id)
) comment 'コメント関連';

create table collections (
  collection_id bigint not null auto_increment comment 'コレクションID',
  title varchar(255) not null comment 'タイトル',
  description varchar(2047) comment '説明文',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  updated_at datetime not null comment '更新日時',
  updated_by bigint not null comment '更新ユーザー',
  primary key (collection_id)
) comment 'コレクション';

create table collections_articles (
  collections_articles_id bigint not null auto_increment comment 'コレクション記事関連ID',
  collection_id bigint not null comment 'コレクションID',
  article_id bigint not null comment '記事ID',
  created_at datetime not null comment '作成日時',
  updated_at datetime not null comment '更新日時',
  primary key (collections_articles_id),
  constraint `fk_collection_articles_collection` foreign key (collection_id) references collections (collection_id),
  constraint `fk_collection_articles_article` foreign key (article_id) references articles (article_id)
) comment 'コレクション記事関連';

create table who_requests (
  who_request_id bigint not null auto_increment comment 'ダレコレリクエストID',
  article_id bigint not null comment '記事ID',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  primary key (who_request_id),
  constraint `fk_who_request_article` foreign key (article_id) references articles (article_id)
) comment 'ダレコレリクエスト';

create table who_answers (
  who_answer_id bigint not null auto_increment comment 'ダレコレ回答ID',
  name varchar(255) not null comment '女優名',
  vote_count bigint not null comment '投票数',
  who_request_id bigint not null comment 'ダレコレリクエストID',
  created_at datetime not null comment '作成日時',
  created_by bigint not null comment '作成ユーザー',
  updated_at datetime not null comment '更新日時',
  primary key (who_answer_id),
  constraint `fk_who_answers_who_request` foreign key (who_request_id) references who_requests (who_request_id)
) comment 'ダレコレ回答';

create table tags_search_conditions (
  tags_search_conditions_id bigint not null auto_increment comment 'タグ検索条件ID',
  tag_id bigint not null comment 'タグID',
  search_condition_id bigint not null comment '検索条件ID',
  created_at datetime not null comment '作成日時',
  updated_at datetime not null comment '更新日時',
  primary key (tags_search_conditions_id),
  constraint `fk_tags_search_conditions_tag` foreign key (tag_id) references tags (tag_id),
  constraint `fk_tags_search_conditions_search_condition` foreign key (search_condition_id) references search_conditions (search_condition_id)
) comment 'タグ検索条件関連';

create table users_search_conditions (
  users_search_conditions_id bigint not null auto_increment comment 'ユーザー検索条件ID',
  user_id bigint not null comment 'ユーザーID',
  search_condition_id bigint not null comment '検索条件ID',
  created_at datetime not null comment '作成日時',
  updated_at datetime not null comment '更新日時',
  primary key (users_search_conditions_id),
  constraint `fk_users_search_conditions_user` foreign key (user_id) references users (user_id),
  constraint `fk_users_search_conditions_search_condition` foreign key (search_condition_id) references search_conditions (search_condition_id)
) comment 'ユーザー検索条件関連';
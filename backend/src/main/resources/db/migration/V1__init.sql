-- MVP schema:spec 第 11 節簡化版,對應 docs/data-model.md 的 erDiagram

CREATE TABLE users (
    id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email             VARCHAR(255) NOT NULL UNIQUE,
    password_hash     VARCHAR(255) NOT NULL,
    display_name      VARCHAR(100) NOT NULL,
    avatar_url        VARCHAR(500),
    plan_type         VARCHAR(20)  NOT NULL DEFAULT 'free',
    role              VARCHAR(20)  NOT NULL DEFAULT 'member',
    consent_analytics BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at        TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE figures (
    id               BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id          BIGINT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    name             VARCHAR(200) NOT NULL,
    brand            VARCHAR(100),
    series           VARCHAR(100),
    character_name   VARCHAR(100),
    source_title     VARCHAR(200),
    figure_type      VARCHAR(50),
    scale            VARCHAR(30),
    ownership_status VARCHAR(20)  NOT NULL DEFAULT 'owned',
    photo_url        VARCHAR(500),
    created_at       TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at       TIMESTAMPTZ  NOT NULL DEFAULT now()
);
CREATE INDEX idx_figures_user_id ON figures (user_id);

CREATE TABLE tags (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tag_name    VARCHAR(100) NOT NULL UNIQUE,
    tag_type    VARCHAR(30)  NOT NULL, -- style / scene / interaction / mood
    description VARCHAR(300)
);

CREATE TABLE figure_tags (
    figure_id BIGINT NOT NULL REFERENCES figures (id) ON DELETE CASCADE,
    tag_id    BIGINT NOT NULL REFERENCES tags (id) ON DELETE CASCADE,
    PRIMARY KEY (figure_id, tag_id)
);

CREATE TABLE inspiration_sessions (
    id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id             BIGINT      NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    selected_figure_ids JSONB       NOT NULL DEFAULT '[]',
    scene               VARCHAR(100),
    emotion             VARCHAR(100),
    task                VARCHAR(100),
    theme_title         VARCHAR(300),
    generated_concept   TEXT,
    generated_caption   TEXT,
    generated_hashtags  JSONB       NOT NULL DEFAULT '[]',
    saved               BOOLEAN     NOT NULL DEFAULT FALSE,
    shared              BOOLEAN     NOT NULL DEFAULT FALSE,
    created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_inspiration_sessions_user_id ON inspiration_sessions (user_id);

CREATE TABLE user_events (
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id     BIGINT      REFERENCES users (id) ON DELETE CASCADE,
    event_type  VARCHAR(50) NOT NULL, -- spec 20F.1 事件清單
    target_type VARCHAR(30),
    target_id   BIGINT,
    metadata    JSONB       NOT NULL DEFAULT '{}',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_user_events_user_id_created_at ON user_events (user_id, created_at);

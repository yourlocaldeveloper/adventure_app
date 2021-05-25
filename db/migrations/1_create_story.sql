DROP TABLE IF EXISTS story;

CREATE TABLE story (
  id serial PRIMARY KEY,
  story jsonb
)
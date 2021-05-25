DROP TABLE IF EXISTS adventure;

CREATE TABLE adventure (
  id serial PRIMARY KEY,
  story json
)
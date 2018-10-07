CREATE TABLE dragon(
  id SERIAL     PRIMARY KEY,
  birthday      TIMESTAMP NOT NULL,
  nickname      VARCHAR(64),
  "gnerationId" INTEGER,
  FOREIGN KEY ("generationId") REFERENCES generation(id)
);
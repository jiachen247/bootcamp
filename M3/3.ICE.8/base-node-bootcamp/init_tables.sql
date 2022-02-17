DROP TABLE IF EXISTS paintings CASCADE;
DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS collections;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE collections (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE paintings (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist_id SERIAL,
    collection_id SERIAL,
    CONSTRAINT fk_artist
      FOREIGN KEY(artist_id)
        REFERENCES artists(id),
    CONSTRAINT fk_collection
      FOREIGN KEY(collection_id)
        REFERENCES collections(id)
);

INSERT INTO artists (name) VALUES ('artist1');
INSERT INTO artists (name) VALUES ('artist2');
INSERT INTO artists (name) VALUES ('artist3');
INSERT INTO artists (name) VALUES ('artist4');
INSERT INTO artists (name) VALUES ('artist5');
INSERT INTO artists (name) VALUES ('artist6');

INSERT INTO collections (name) VALUES ('collection1');
INSERT INTO collections (name) VALUES ('collection2');
INSERT INTO collections (name) VALUES ('collection3');

INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting1', 1, 1);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting2', 1, 2);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting3', 2, 3);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting4', 3, 2);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting5', 4, 1);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting6', 5, 2);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting7', 6, 3);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting8', 6, 1);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting9', 6, 1);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting10', 2, 2);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting11', 3, 2);
INSERT INTO paintings (name, artist_id, collection_id) VALUES ('painting12', 1, 3);

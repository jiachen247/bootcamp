-- psql -d jiachen -f init_tables.sql
CREATE TABLE cat_owners (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name TEXT,
    owner_id INTEGER
);
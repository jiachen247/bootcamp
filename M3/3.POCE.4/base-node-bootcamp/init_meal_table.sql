-- To run :
-- $ psql -d jiachen -f init_tables.sql
-- To verify:
-- $ psql jiachen
-- # \d cat_owners
DROP TABLE IF EXISTS meals;
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    type TEXT,
    description TEXT,
    amount_of_alcohol INTEGER,
    was_hungry_before_eating BOOLEAN,
    created_at TIMESTAMP
);

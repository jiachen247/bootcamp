-- psql -d jiachen -f init_tables.sql
DROP TABLE IF EXISTS exercises;
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT
);

DROP TABLE IF EXISTS workouts;
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    name TEXT,
    date TEXT
);

DROP TABLE IF EXISTS exercise_workouts;
CREATE TABLE exercise_workouts (
    id SERIAL PRIMARY KEY,
    exercise_id INTEGER,
    workout_id INTEGER
);

-- INSERT exercises
INSERT INTO exercises (name) VALUES ('deadlift');
INSERT INTO exercises (name) VALUES ('squat');
INSERT INTO exercises (name) VALUES ('leg press');
INSERT INTO exercises (name) VALUES ('leg curl');
INSERT INTO exercises (name) VALUES ('snatch');
INSERT INTO exercises (name) VALUES ('biceps');

-- INSERT workouts
INSERT INTO workouts (name, date) VALUES ('workout1', '10/10/2020');
INSERT INTO workouts (name, date) VALUES ('workout2', '11/11/2020');
INSERT INTO workouts (name, date) VALUES ('workout3', '12/12/2020');

-- INSERT mappings
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (1, 1);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (2, 1);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (3, 1);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (4, 1);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (5, 1);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (6, 1);

INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (1, 2);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (3, 2);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (6, 2);


INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (1, 3);
INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (2, 3);


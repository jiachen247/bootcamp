import pg from 'pg';

const { Client } = pg;

// set the way we will connect to the server
const pgConnectionConfigs = {
  user: 'jiachen',
  host: 'localhost',
  database: 'jiachen',
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const client = new Client(pgConnectionConfigs);

// make the connection to the server
client.connect();

// create the query done callback
const whenQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    // rows key has the data
    console.log(result.rows);
  }

  // close the connection
  client.end();
};

const command = process.argv[2] || '';

const whenExerciseQueryDone = (error, result) => {
  // this error is anything that goes wrong with the query
  if (error) {
    console.log('error', error);
  } else {
    result.rows.forEach((row, index) => console.log(`${index + 1}. ${row.name}`));
  }

  // close the connection
  client.end();
};

function handleExercises() {
  console.log('Exercises:');
  const sqlQuery = 'SELECT * FROM exercises;';
  client.query(sqlQuery, whenExerciseQueryDone);
}

function handleAddWorkout() {
  const [
    // eslint-disable-next-line no-unused-vars
    appName,
    // eslint-disable-next-line no-unused-vars
    scriptName,
    // eslint-disable-next-line no-unused-vars
    cmdName,
    workoutName,
    workoutDate,
    ...workoutExercises
  ] = process.argv;

  const addWorkoutSqlQuery = `INSERT INTO workouts (name, date) VALUES ('${workoutName}', '${workoutDate}') RETURNING id ;`;

  client.query(addWorkoutSqlQuery, (error, result) => {
    if (error) {
      console.log('error', error);
    } else {
      const workoutId = result.rows[0].id;
      // eslint-disable-next-line no-restricted-syntax
      for (const exercise of workoutExercises) {
        console.log(`Adding exercise ${exercise} to workout ${workoutId}`);
        const addExerciseToWorkoutSqlQuery = `INSERT INTO exercise_workouts (exercise_id, workout_id) VALUES (${exercise}, ${workoutId})`;
        client.query(addExerciseToWorkoutSqlQuery, () => null);
      }
    }
    // client.end();
  });
}

function handleGetWorkouts() {
  const query = `
    SELECT workouts.name AS workout_name, exercises.name as exercise_name
    FROM exercise_workouts
    INNER JOIN exercises
    ON exercises.id = exercise_workouts.exercise_id
    INNER JOIN workouts
    ON workouts.id = exercise_workouts.workout_id;
  `;
  client.query(query, (error, result) => {
    if (error) {
      console.log('error', error);
    } else {
      console.log('Workouts: ');
      const workouts = new Set(result.rows.map((row) => row.workout_name));
      let index = 1;
      workouts.forEach((workout) => {
        console.log(`${index}. ${workout}`);
        index += 1;
        result.rows.filter((row) => row.workout_name === workout).forEach(
          (row) => console.log(`    - ${row.exercise_name}`),
        );
      });
    }
    client.end();
  });
}

if (command === 'exercises') {
  handleExercises();
} else if (command === 'add-workout') {
  handleAddWorkout();
} else if (command === 'get-workouts-by-exercise') {
  handleGetWorkouts();
} else {
  console.log(`Unknown command:${command}`);
  client.end();
}

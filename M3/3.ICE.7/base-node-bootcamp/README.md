# 3.ICE.7: Many to Many

Create a command-line app to record workouts.

## Setup

```
$ npm install
$ psql -f init_tables.sql
```

# Base

1. List exercises

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js exercises
Exercises:
1. deadlift
2. squat
3. leg press
4. leg curl
5. snatch
6. biceps
```

2. Add workout

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js add-workout 'arm tuesday' '3/2/2020' 1 2
Adding exercise 1 to workout 4
Adding exercise 2 to workout 4
```

3. List workouts

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js get-workouts-by-exercise
Workouts:
1. workout1
    - deadlift
    - squat
    - leg press
    - leg curl
    - snatch
    - biceps
2. workout2
    - deadlift
    - leg press
    - biceps
3. workout3
    - deadlift
    - squat
4. arm tuesday
    - deadlift
    - squat
```

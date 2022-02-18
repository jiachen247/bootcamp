# 3.ICE.5: One to Many

## Setup

```
$ npm install
$ psql -f init_tables.sql
```

## Base

1. Create owner

```
$ node index.js create-owner Tom
```

2. Create cat

```
$ node index.js create-cat 1 Fluffy
```

3. Get cats and it's owners

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js cats
Displaying cats and their owners
Cats:
1. Fluffy: Owner: Jim
2. Kitty: Owner: Jim
```

4. Get owners and cats

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js owners
Displaying owners and their cats
Owners:
1. Jim
    - Cats
        - Fluffy
        - Kitty
```

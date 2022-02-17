# 3.4.2: PostgreSQL Node App Exercise

## Setup

```
$ npm install
```

- copy and paste `init_tables.sql` into psql prompt

## Test

1. Display all dogs

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js all-dogs
[]
```

2. Insert new dog

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js fluffy terrier 654
[]
```

3. display all dogs again

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js all-dogs
[ { id: 1, name: 'fluffy', type: 'terrier', weight: 654 } ]
```

4. Verify in psql
![](2021-12-29-10-53-30.png)

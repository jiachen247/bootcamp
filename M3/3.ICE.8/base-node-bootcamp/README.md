# 3.ICE.8: Multiple Foreign Keys

## Setup

```
$ npm install
$ psql -f init_tables.sql
```

## Base

1. Create Painting and Add to Collection

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js new-painting new_painting1 1 2
success!
```

2. Get Artists in Collection

```
jiachen@jiachens-MBP base-node-bootcamp % node index.js get-artists 'collection1'
1. artist1
2. artist4
3. artist6
4. artist6

```

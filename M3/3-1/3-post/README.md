# 3.1.3: Handling POST Requests Exercise

### Instruction

1. Execute the above code and verify it adds new recipes to our DB.
2. Change the name attribute in 1 of the form input elements, re-send the request, and observe the key change in request.body.

### Run

```
$ npm install
$ node index.js
```

## Test

1. Visit `http://localhost:3004/recipe`
2. Add recipe
3. Check data.json that it now contains the added recipe

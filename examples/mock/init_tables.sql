DROP TABLE IF EXISTS payroll;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  empid SERIAL PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT,
  zip TEXT
);

CREATE TABLE payroll (
  empid INTEGER PRIMARY KEY,
  salary INTEGER NOT NULL,
  bonus INTEGER
);


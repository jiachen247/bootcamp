COPY employee(empid, fname, lname, email, address, city, state, zip)
FROM '/Users/jiachen/rocketacademy/bootcamp/examples/mock/employee.csv'
DELIMITER ','
CSV HEADER;

COPY payroll(empid, salary, bonus)
FROM '/Users/jiachen/rocketacademy/bootcamp/examples/mock/payroll.csv'
DELIMITER ','
CSV HEADER;
### Popeyes: Lauren Lee, Vivian Teo, Ian Jiang
### SoftDev
### K17 -- Figuring Out SQL 
### 2022-10-24
### time spent: 1 hour

#### CREATE TABLE: creates a table
#### INSERT: inserts a datatype into the table
#### SELECT: returns a piece of data from the table

### Examples:
``` CREATE TABLE popeyes (menu TEXT, id INTEGER PRIMARY KEY);
INSERT INTO popeyes VALUES ("drumstick", 0);
INSERT INTO popeyes VALUES ("fries", 1);
INSERT INTO popeyes VALUES ("sandwich", 2);
INSERT INTO popeyes VALUES ("biscuit", 3);
SELECT * FROM popeyes;
```
### OUTPUT:
```drumstick|0
fries|1
sandwich|2
biscuit|3
```
```SELECT menu FROM popeyes WHERE id = 0;```

#### When you select one element from a database, it'll output that element the number of times there are elements in the database






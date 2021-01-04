SELECT * FROM users;

-- WHERE LIKE 
SELECT * 
FROM users
WHERE name LIKE '%o%';

-- SELECT columns, ORDER BY 
SELECT id, name, surname
FROM users
ORDER BY name ASC;

-- COUNT, AS (ALIAS) 
SELECT count(id) AS num_of_users
FROM users;

-- Page 1 
SELECT * 
FROM users
LIMIT 2
OFFSET 0;
-- Page 2 
SELECT * 
FROM users
LIMIT 2
OFFSET 2;
-- Page 3 
SELECT * 
FROM users
LIMIT 2
OFFSET 4;

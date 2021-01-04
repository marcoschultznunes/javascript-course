USE test2;

UPDATE users
SET password='xalapassa', surname='Xinponga'
WHERE id=1;

UPDATE users
SET password='lasonwdq'
WHERE id=2;

SELECT * FROM users;

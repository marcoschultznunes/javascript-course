-- DATE: YYYY-MM-DD
-- DATETIME: YYYY-MM-DD HH:MI:SS
-- TIMESTAMP: YYYY-MM-DD HH:MI:SS

CREATE TABLE IF NOT EXISTS subscription (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    signedUp DATE NOT NULL
);

INSERT INTO subscription(signedUp)
VALUES ('2021/01/01');
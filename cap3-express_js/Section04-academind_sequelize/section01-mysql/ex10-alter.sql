ALTER TABLE subscription
	MODIFY COLUMN signedUp TIMESTAMP NOT NULL,
	ADD COLUMN user_id INT NOT NULL,
    ADD FOREIGN KEY (user_id) REFERENCES users(id);

INSERT INTO subscription(signedUp, user_id)
VALUES ('2021/01/01 08:50', 1);
INSERT INTO subscription(signedUp, user_id)
VALUES ('2020/08/09 19:15', 5);

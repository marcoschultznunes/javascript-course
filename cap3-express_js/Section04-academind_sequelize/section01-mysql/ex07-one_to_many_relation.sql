USE test2;

CREATE TABLE IF NOT EXISTS messages (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(500) NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    FOREIGN KEY (sender_id)
        REFERENCES users(id)
        ON DELETE CASCADE,
	FOREIGN KEY (receiver_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

INSERT INTO messages (content, sender_id, receiver_id)
VALUES (
	'Fala aí cachorra',
    2,
    6
);

INSERT INTO messages (content, sender_id, receiver_id)
VALUES (
	'Firmeza?',
    6,
    2
);

INSERT INTO messages (content, sender_id, receiver_id)
VALUES (
	'Ô viado!',
    5,
    8
);

INSERT INTO messages (content, sender_id, receiver_id)
VALUES (
	'Ô KRAI TA AÍ??!',
    7,
    1
);

SELECT * FROM messages;

SELECT 
	m.content, 
    s.name AS sender_name, 
    s.surname AS sender_surname, 
    r.name AS receiver_name,
    r.surname AS receiver_surname
FROM messages AS m 
LEFT JOIN users AS s
ON m.sender_id = s.id
LEFT JOIN users AS r
ON m.receiver_id = r.id

select 
us.first_name, us.last_name, tw.id, tw.tweet 
from 
faves fv, users us, tweets tw
where 
fv.user_id = us.id and fv.tweet_id = tw.id -- relaciones
and us.id = 1; -- solo los datos del usuario con id 1

-- con JOIN
-- solo datos especificos
select us.first_name, us.last_name, tw.id, tw.tweet 
from faves fv
INNER JOIN users us ON fv.user_id = us.id
INNER JOIN tweets tw ON fv.tweet_id = tw.id
where  us.id = 1; -- solo los datos del usuario con id 1

-- INSERT
INSERT INTO users  (first_name, last_name, handle,birthday,created_at, updated_at) 
VALUES('Michael', 'Jordan','airjordan','1974-05-01','2021-07-05 16:20:00','2021-07-05 16:20:00');

SELECT * FROM users;

-- UPDATE
UPDATE users SET birthday= '1963-02-17', updated_at='2021-07-05 16:24:00' 
WHERE ID = 6;

-- DELETE
DELETE FROM users
WHERE id = 7;


-- 1 Usando el siguiente ERD como referencia, escribe una consulta SQL que devuelva una lista de usuarios junto con los nombres de sus amigos.

Select users.first_name, users.last_name, 
users_friend.first_name, users_friend.last_name from users
left join friendships friend on friend.user_id=users.id 
left join users as users_friend on users_friend.id=friend_id;

-- 1. Devuelva a todos los usuarios que son amigos de Kermit, asegúrese de que sus nombres se muestren en los resultados.

Select * from users inner join friendships f on f.user_id=users.id;

Select users.first_name, users.last_name from users
left join friendships friend on friend.user_id=users.id
where friend.friend_id=4;

-- 2. Devuelve el recuento de todas las amistades.

Select *  from friendships;

Select users.first_name, users.last_name, count(friend.friend_id) as num_amigos
from users
left join friendships friend on friend.user_id=users.id group by users.id;

-- 3. Descubre quién tiene más amigos y devuelve el recuento de sus amigos.

Select users.first_name, users.last_name, count(friend.friend_id) as num_amigos,
max(num_amigos)
from users
left join friendships friend on friend.user_id=users.id group by users.id;



-- 4. Crea un nuevo usuario y hazlos amigos de Eli Byers, Kermit The Frog y Marky Mark.
-- 5. Devuelve a los amigos de Eli en orden alfabético.
-- 6. Eliminar a Marky Mark de los amigos de Eli.
-- 7. Devuelve todas las amistades, mostrando solo el nombre y apellido de ambos amigos
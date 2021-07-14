select * from cities;
select * from countries;
select * from languages; 

-- ¿Qué consulta harías para obtener todos los países que hablan esloveno? 
-- Tu consulta debe devolver el nombre del país, el idioma y el porcentaje de idioma. 
-- Tu consulta debe organizar el resultado por porcentaje de idioma en orden descendente.

-- 1
select lg.language, lg.percentage from languages lg
where lg.language LIKE '%lovene%'
ORDER BY lg.percentage desc;


Select * from cities;
Select * from countries;
-- 2
SELECT cou.name, count(*) as n_ciudades from countries cou, cities cit
where cou.id=cit.country_id group by cou.name order by n_ciudades desc;
 
 -- 3
 Select id, name from countries Where name like "Mexico";
 
SELECT cities.name as nombre_ciudad ,cities.population as poblacion_total from cities
where cities.country_id = 136 and cities.population>500000 
order by cities.population desc;
 
 -- 4
 Select cou.name, lan.language  from languages lan, countries cou 
 where lan.country_id=cou.id;
 
 -- 5
 select cou.name as nombre, cou.surface_area as area_superficie from countries cou, cities cit 
 where  cou.surface_area <501
 
 -- 6
 select * from cities inner join countries;
 
 
 
 
 
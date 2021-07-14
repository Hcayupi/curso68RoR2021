-- Consultas
-- 1. ¿Qué consulta harías para obtener todos los países que hablan esloveno? Tu consulta debe devolver el nombre del país, el idioma y el porcentaje de idioma. Tu consulta debe organizar el resultado por porcentaje de idioma en orden descendente. (1)

select cou.name, lan.language, lan.percentage from countries cou, languages lan where cou.id=lan.country_id and lan.language like "%lovene" order by  lan.percentage desc; 

-- 2. ¿Qué consulta ejecutarías para mostrar el número total de ciudades para cada país? Su consulta debe devolver el nombre del país y el número total de ciudades. Tu consulta debe organizar el resultado por el número de ciudades en orden descendente. (3)

select countries.name, count(countries.name) total
from cities
INNER JOIN countries ON cities.country_id = countries.id
group by countries.name
order by total desc;

-- 3. ¿Qué consulta harías para obtener todas las ciudades de México con una población de más de 500,000? Tu consulta debe organizar el resultado por población en orden descendente.(1)

Select * from countries where countries.name like "%xico";

select cit.name, cit.population from cities cit where cit.country_id=136
and cit.population>500000 order by cit.population desc;

-- 4. ¿Qué consulta ejecutarías para obtener todos los idiomas en cada país con un porcentaje superior al 89%? Tu consulta debe organizar el resultado por porcentaje en orden descendente. (1)

select cou.name, lan.language, lan.percentage 
from countries cou, languages lan where lan.percentage>89;

select countries.name, languages.language, languages.percentage from languages 
INNER JOIN countries on countries.id =languages.country_id 
where percentage > 89 order by percentage desc;

-- 5. ¿Qué consulta haría para obtener todos los países con un área de superficie inferior a 501 y una población superior a 100,000? (2)

Select * from countries cou where  cou.surface_area<501 and cou.population>100000;

-- 6. ¿Qué consulta harías para obtener países con solo Monarquía Constitucional con un capital superior a 200 y una esperanza de vida superior a 75 años? (1)

Select * from countries cou where cou.government_form like "%Mon%";

Select cou.name, cou.government_form, cou.life_expectancy from countries cou 
where cou.government_form = 'Constitutional Monarchy'
and cou.capital>200 
and cou.life_expectancy>75;

-- 7. ¿Qué consulta harías para obtener todas las ciudades de Argentina dentro del distrito de Buenos Aires y tener una población superior a 500,000? La consulta debe devolver el nombre del país, el nombre de la ciudad, el distrito y la población. (2)

select * from countries where name like "%ntina"; -- 9
select * from cities where country_id=9;  -- district= Buenos Aires

select
cou.name as pais, 
cit.name as ciudad, 
cit.district as distrito, 
cit.population as poblacion 
from cities cit  
inner join countries cou 
on cou.id=cit.country_id
where cou.id=9 
and cit.district="Buenos Aires" 
and cit.population>500000;

-- 8. ¿Qué consulta harías para resumir el número de países en cada región? La consulta debe mostrar el nombre de la región y el número de países. Además, la consulta debe organizar el resultado por el número de países en orden descendente. (2)

select cou.region, count(region) as numero_paises 
from countries cou 
group by region 
order by numero_paises desc;


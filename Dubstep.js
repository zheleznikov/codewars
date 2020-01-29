/* 
https://www.codewars.com/kata/551dc350bf4e526099000ae5

Нужно понять что за слова в песне, убрав из строки WUB

*/

songDecoder = song  => song.split('WUB').filter(elem => elem !== "").join(' ');

//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
function solve(){alert(h(a,b,c))}
var a=10;
var b=4;
var c=6;
function h(a,b,c){
	var p=(a+b+c)/2;
	var h=(2/a)*Math.sqrt(p*(p-a)*(p-b)*(p-c));
if (a>0 && b>0 && c>0 && h>0)
 {return h}else{return -1}
}
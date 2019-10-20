//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию
function solve(){alert(f(a,b,c,d))}
var a=100;
var b=60;
var c=400;
var d=40;

function f(a,b,c,d){
var min1,min2,max;
 if (a<=b) 
   	{min1=a}else{min1=b}
 if (c<=d)
    {min2=c}else{min2=d}
 if (min1>=min2)
    {return max=min1}else{return max=min2}
}

// Пример функции - задание 1
// f(x,y,z) = min(x+y+z, xyz, xy+z)
 function f(x, y, z){
     if ((x+y+z <= x*y*z) && (x+y+z <= x*y+z))
         return x+y+z;
     if ((x*y*z <= x+y+z) && (x*y*z <= x*y+z))
         return x*y*z; 
     if ((x*y+z <= x*y*z) && (x*y+z <= x+y+z))
         return x*y + z;
}
 console.log(f(0,2,5));
 module.exports = f;
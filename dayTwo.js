// let isTriangle = (a,b,c) =>{if (b/2==a && c/2 == a){console.log("true")}
// else {console.log("false")}}


// let isTriangle = (a, b, c) => {if ((a+b) < c && (b+c) < a && (a+c) < b){console.log(true)}
// else {console.log("false")}}
// isTriangle(7,2,2)
// isTriangle(1,2,2)
// isTriangle(4,8,8)
// isTriangle(3,4,6)

function isTriangle(a,b,c)
{
if(a+b>c && b+c>a && c+a>b){
  return true;
}
  return false;
}
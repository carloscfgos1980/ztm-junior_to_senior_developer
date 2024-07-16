function add(x: number, y: number): number {
  return x + y;
}
 
let myAdd = function (x: number, y: number): number {
  return x + y;
};

const answer = myAdd(6, 9);
console.log(answer);
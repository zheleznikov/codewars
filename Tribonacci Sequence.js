function tribonacci(array,n){
  let a = array[0];
  let b = array[1];
  let c = array[2];
  
  if (n === 0) {
    return []
  }
  
  if (n === 1) {
    return array.slice(-1)
  }
  
  for (let i = 4; i <= n; i++) {
    let sum = a + b + c;
    a = b;
    b = c;
    c = sum;
    array.push(sum);
  }
  
  return array
}

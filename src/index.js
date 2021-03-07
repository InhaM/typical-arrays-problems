
exports.min = function min (array) {
    let k=array[0];
    
    array.forEach( element => {
    if (element < k)
        k = element;        
    });
  return k;
}

exports.max = function max (array) {
  let k=array[0];
    
    array.forEach( element => {
    if (element > k)
        k = element;        
    });
  return k;
}

exports.avg = function avg (array) {
 let sum = 0;
    
    array.forEach( element => {
    sum += element;
        
    });
  return sum / array.length;
}

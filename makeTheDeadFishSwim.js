function parse(data) {
  let fish = 0;
  let sea = [];
  
  for (let command of data) {
    if (command === 'i') {
      fish++;
    } else if (command === 'd') {
      fish--;
    } else if (command === 's') {
      fish = fish*fish;
    } else if (command === 'o') {
      sea.push(fish);
    }
  }
  
  return sea
  
}

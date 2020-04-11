  // forEach
  function swap(obj) {
    const res = {};
    Object.keys(obj).forEach((key) => {
      res[obj[key]] = key
    })
    return res
  }


  // reduce
  function swap(obj) {
    return Object.keys(obj).reduce((res, key) => {
      res[obj[key]] = key;
      return res
    }, {})
  }

  const myObj = {
    first: 1,
    second: 2,
    third: 3
  };

  console.log(myObj); //{first: 1, second: 3, two: 2}.
  console.log(swap(myObj)); //{1: "first", 2: "second", 3: "third"}

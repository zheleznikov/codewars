// создать новый объект, такой же как предыдущий
function dorianGray(obj) {
	return Object.keys(obj).reduce((res, current) => {
      res[current] = obj[current];
      return res
    },{})
}

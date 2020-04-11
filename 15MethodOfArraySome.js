// https://www.codewars.com/kata/5827acd5f524dd029d0005a4

function isRubyComing(list) {
 for (developer of list) {
   if (developer.language === 'Ruby') {
     return true
   } 
 }
 return false
}

function isRubyComing(list) {
return list.some(function(developer) {
  return developer.language === 'Ruby'
})
}

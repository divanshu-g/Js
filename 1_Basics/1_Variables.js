const accountId = 1212121
let accountEmail = "Divanshu@gmail.com"
var accountPassword = "12345"
accountCity = "DeraBassi"

// accountId = 2    not allowed coz const can't be altered 
console.log(accountId)

accountEmail = "hc@garg.com"
accountPassword = "35678567346"
accountCity = "Zirkpur"

console.table([accountId, accountEmail, accountPassword, accountCity]);


// we don't use var coz it doesn't obey scope functionaity 

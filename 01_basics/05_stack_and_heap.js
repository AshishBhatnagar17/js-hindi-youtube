stack -> which creates copy
heap -> give direct reference

stack(primitive) 
heap (non Primitive)
let x = "Ashish"
let y = x;
y = "Lakshay"
console.log(x); ---> prints Ashish
console.log(y) ---> prints Lakshay
// above example if ofstack that copy creates actual value not changed

let userOne = {
  email: "user@google.com"
  upi: "844@paytm
}
let userTwo = userOne
userTwo.email = "abc@google.com"

console.log(userOne.email); ---> prints abc@google.com
console.log("userTwo.email"); ---> prints abc@google.com
// in abpve exammple object is created in which actual reference is shared;



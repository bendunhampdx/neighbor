// Business logic

function beepBoop(number) {
let newArray = [];
for (let i = 0; i <= number; i++) {
  newArray.push([i].toString()); {
    if ([i].toString().includes("1")) {
      newArray.splice(i, 1, "Beep!")
    }
  }
}
  console.log(newArray)
}















// UI Logic
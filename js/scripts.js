// Business logic

function beepBoop(number) {
  let newArray = [];
  for (let i = 0; i <= number; i++) {
    newArray.push([i].toString()); {
      if ([i].toString().includes("3")) {
        newArray.splice(i, 3, "Won't you be my neighbor?")
      } else if ([i].toString().includes("2")) {
          newArray.splice(i, 2, "Boop!")
      } else if ([i].toString().includes("1")) {
          newArray.splice(i, 1, "Beep!")
      } else {
        newArray[i]
      }
    }
  }
    return newArray;
}



// UI Logic

$(document).ready(function() {
  $("#entry").submit(function(event) {
    event.preventDefault();
    let newArray = beepBoop($(".userinput").val());
    $(".result").text(newArray);
  });
});
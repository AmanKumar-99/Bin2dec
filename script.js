function checkBinaryDigit(event) {
  // Using ascii value
  let ascii = event.which ? event.which : event.keyCode

  return ascii === 48 || ascii === 49 // Checking for 0 and 1
}

function covertBinaryToDec(givenNumber) {
  if (givenNumber.length === 0) return -1
  // Do something
  let result = 0
  for (let i = givenNumber.length - 1, j = 0; i >= 0; i--, j++) {
    if (givenNumber.charAt(i) === "1") {
      result = result + Math.pow(2, j)
    }
  }
  return result
}

document.getElementById("confirm-btn").addEventListener("click", (event) => {
  event.preventDefault()
  const decimalNumber = document.getElementById("binary-digit").value
  const res = covertBinaryToDec(decimalNumber)
  if (res === -1) {
    document.querySelector(".decimal-msg").innerHTML =
      "Please enter some number"
  } else {
    document.querySelector(
      ".decimal-msg"
    ).innerHTML = `The decimal number is : ${res}`
  }
})

const digits = document.querySelectorAll(".digit");
digits[0].focus();

digits.forEach((digit, index) => {
  digit.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // Resetting current
      digits[index].value = "";
      setTimeout(() => {
        digits[index + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        // Shifting back focus
        digits[index - 1].focus();
      }, 10);
    }
  });
});
let counts = document.querySelectorAll(".counter");
function counterFunction (count) {
    let plus = count.querySelector(".plus");
    let minus = count.querySelector(".minus");
    let number = count.querySelector(".num");
    let numberValue = parseFloat(number.value, 10);

    minus.addEventListener("click", function () {
        if (numberValue == 0) {
            return;
        };
        numberValue--;
        number.value = numberValue;
    });

    plus.addEventListener("click", function () {
        if (numberValue == 0) {
            return;
        };
        numberValue++;
        number.value = numberValue;
    });
}

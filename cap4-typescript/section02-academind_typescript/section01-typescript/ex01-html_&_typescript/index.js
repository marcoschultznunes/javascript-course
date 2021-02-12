"use strict";
var ninput1 = document.getElementById('n1');
var ninput2 = document.getElementById('n2');
var multiplyButton = document.getElementById('multiply-button');
var multiply = function (n1, n2) {
    return n1 * n2;
};
multiplyButton.addEventListener('click', function () {
    alert(multiply(+ninput1.value, +ninput2.value));
});

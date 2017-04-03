/**
 * Created by HKoehler on 11/16/16.
 */
(function () {
    "use strict";

    // variable for each button
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    var btn7 = document.getElementById('btn7');
    var btn8 = document.getElementById('btn8');
    var btn9 = document.getElementById('btn9');
    var btn0 = document.getElementById('btn0');
    var btnA = document.getElementById('btnA');
    var btnS = document.getElementById('btnS');
    var btnM = document.getElementById('btnM');
    var btnD = document.getElementById('btnD');
    var btnE = document.getElementById('btnE');
    var btnC = document.getElementById('btnC');
    var decimal = document.getElementById('decimal');
    var sRoot = document.getElementById('sRoot');
    var posNeg = document.getElementById('posNeg');

    // eventListener for each button
    btn1.addEventListener('click', addDigit);
    btn2.addEventListener('click', addDigit);
    btn3.addEventListener('click', addDigit);
    btnA.addEventListener('click', addOp);
    btn4.addEventListener('click', addDigit);
    btn5.addEventListener('click', addDigit);
    btn6.addEventListener('click', addDigit);
    btnS.addEventListener('click', addOp);
    btn7.addEventListener('click', addDigit);
    btn8.addEventListener('click', addDigit);
    btn9.addEventListener('click', addDigit);
    btnM.addEventListener('click', addOp);
    btnC.addEventListener('click', clear);
    btn0.addEventListener('click', addDigit);
    btnE.addEventListener('click', evaluate);
    btnD.addEventListener('click', addOp);
    decimal.addEventListener('click', addDecimal);
    sRoot.addEventListener('click', squareRoot);
    posNeg.addEventListener('click', changeSign);

    function addDigit() {
        var centerField = document.getElementById('operator');
        if (centerField.value == '') {
            var leftField = document.getElementById('leftOp'); // target left input
            var val = document.getElementsByClassName('button').value; // get button's value
            leftField.value += this.value; //start in the first input
        } else if (centerField.value != '') { // if operator input is occupied, go to right input
            var rightField = document.getElementById('rightOp'); // target right input after operator
            var val2 = document.getElementsByClassName('button').value; // get button's value
            rightField.value += this.value; // place in second input
        }
    }

    function addOp() {
        var centerField = document.getElementById('operator'); // target center input
        var val = document.getElementsByClassName('button').value; //get buttons value
        centerField.value = this.value; //assign value to center input
    }

    function addDecimal() {
        var centerField = document.getElementById('operator');
        if (centerField.value == '') { // if center field is empty...
            var leftField = document.getElementById('leftOp'); // target left input
            var val = document.getElementById('decimal').value; // get button's value
            leftField.value += this.value; // start in the first input
        } else if (centerField.value != '') { // if center field is occupied...
            var rightField = document.getElementById('rightOp'); // target right input
            var val2 = document.getElementById('decimal').value; // get button's value
            rightField.value += this.value; // place in second input
        }
    }

    function clear() { //clears all three inputs
        document.getElementById('leftOp').value = '';
        document.getElementById('operator').value = '';
        document.getElementById('rightOp').value = '';
    }

    function evaluate() {
        var leftField = document.getElementById('leftOp'); // target left field, where sum will be returned
        var num1 = document.getElementById('leftOp').value; // target first result
        var op = document.getElementById('operator').value; // target operator
        var num2 = document.getElementById('rightOp').value; // target second result
        var sum = eval(num1 + op + num2); // calculate value from first input and second input based on operator
        document.getElementById('leftOp').value = ''; // clear first input after eval
        document.getElementById('rightOp').value = ''; // clear second input after eval
        return leftField.value = sum.toFixed(2); // return sum in first input box & keep the operator
    }

    function squareRoot() {
        var leftField = document.getElementById('leftOp'); //target left field
        var number = document.getElementById('leftOp').value; // get value from left field
        var sRoot = Math.sqrt(number); // find square root of number
        document.getElementById('leftOp').value = ''; //clear previous left value
        document.getElementById('operator').value = ''; //clear right input
        return leftField.value = sRoot.toFixed(2); // return square root into left input
    }

    function changeSign() {
        var centerField = document.getElementById('operator'); // target center field
        if (centerField.value == '') { //if center field is empty...
            var leftField = document.getElementById('leftOp');// target left input
            var number1 = document.getElementById('leftOp').value;// target value in input
            leftField.value = number1 * -1; //multiply value by -1
        } else if (centerField.value != '') { //if center field is occupied, then...
            var rightField = document.getElementById('rightOp'); //target right input if operator is full
            var number2 = document.getElementById('rightOp').value; //target value in input
            rightField.value = number2 * -1; //multiply value by -1
        }
    }
}());

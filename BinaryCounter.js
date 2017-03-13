/* 
 * Binary Counter by Andrew Brown.
 * Friday, September 9th, 2016
 */

var count = 0;

function start() {
    var buttonPlus = document.getElementById("plus");
    buttonPlus.addEventListener("click", add, false);
    var buttonMinus = document.getElementById("minus");
    buttonMinus.addEventListener("click", subtract, false);
    var buttonZero = document.getElementById("zero");
    buttonZero.addEventListener("click", zero, false);
    document.getElementById("count").innerHTML = count;
}

// Credit due here: http://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript 
function pad(binaryString){
    var str = "" + binaryString;
    var pad = "00000000";
    return pad.substring(0, pad.length - str.length) + str;
}

function zero() {
    count = 0;
    for(var i = 0; i <= 7; i++) {
        cell = document.getElementById("binTable").rows[0].cells;
        cell[i].innerHTML = "0";
        }
    document.getElementById("count").innerHTML = count;
}

function add() {
    var tempString, arr, indexTable, indexArray, cell;
    count++;
    if(count < 0) {
        tempString = (count >>> 0).toString(2).substring(24,33);
        arr = tempString.split("");
    }
    else {
        tempString = (count >>> 0).toString(2);
        arr = pad(tempString).split("");
    }
    
    for(indexTable = 7, indexArray = arr.length-1; indexTable >= 0; indexTable--, indexArray--) {
        cell = document.getElementById("binTable").rows[0].cells;
        if(count < -128 || count > 127) {
            cell[indexTable].innerHTML = "overflow";
        }
        else {
            cell[indexTable].innerHTML = arr[indexArray];
        }
        }
    
   document.getElementById("count").innerHTML = count;
    
}

function subtract() {
    var tempString, arr, indexTable, indexArray, cell;
    count--;
    
    
    if(count >= 0) {
        tempString = (count >>> 0).toString(2);
        arr = pad(tempString).split("");
    }
    else {
        tempString = (count >>> 0).toString(2).substring(24,33);
        arr = tempString.split("");
        
    }
    
    for(indexTable = 7, indexArray = arr.length-1; indexTable >= 0; indexTable--, indexArray--) {
            cell = document.getElementById("binTable").rows[0].cells;
            if(count < -128 || count > 127) {
                cell[indexTable].innerHTML = "overflow";
            }
            else {
                cell[indexTable].innerHTML = arr[indexArray];
            }
        }
    
    document.getElementById("count").innerHTML = count;
    
}

window.addEventListener("load", start, false);
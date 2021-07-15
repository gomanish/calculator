var display = document.getElementById('display');
var button = document.getElementsByClassName('button');
var num1 = 0;
var num2 =null;
var operator = null;
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }
        else if(value == '-'){
            operator = '-';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }
        else if(value == '*'){
            operator = '*';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }
        else if(value == '/'){
            operator = '/';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }
        else if(value == '%'){
            operator = '%';
            num1 = parseFloat(display.innerHTML);
            display.innerHTML = '';
        }
        else if(value == '='){
            num2 = parseFloat(display.innerHTML);
            let result = eval(num1 + operator + num2);
            if(result == Infinity || result == -Infinity){
                display.innerHTML = 'Error';
            }
            else{
                display.innerHTML = result;
            }
        }
        else if(value == 'ac'){
            display.innerHTML = '';
        }
        else if(value == 'sign'){
            let num = parseFloat(display.innerHTML);
            display.innerHTML = num > 0 ? num * -1 : num;
        }
        else{
            display.innerHTML += value;
        }
    });
}

// for keyboard events

document.addEventListener('keydown', function(e){
    let value = e.key;
    if(value == '+'){
        button[15].click();
    }
    else if(value == '-'){
        button[11].click();
    }
    else if(value == '*'){
        button[7].click();
    }
    else if(value == '/'){
        button[3].click();
    }
    else if(value == '%'){
        button[2].click();
    }
    else if(value == '='){
        button[18].click();
    }
    else if(value == 'Enter'){
        button[18].click();
    }
    else if(value == '.' || value == '0' || value == '1' || value == '2' || value == '3' || value == '4' || value == '5' || value == '6' || value == '7' || value == '8' || value == '9'){
        display.innerHTML += value;
    }
});
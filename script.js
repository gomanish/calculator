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
            display.innerHTML = eval(num1 + operator + num2);
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

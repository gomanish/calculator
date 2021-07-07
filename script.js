var display = document.getElementById('display');
var button = document.getElementsByClassName('button');
var num1 = 0;
var num2 =null;
var operator = null;
for(var i=0; i<button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
    });
}

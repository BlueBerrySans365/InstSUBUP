var prompt = require("prompt");
var consoleStyles = {
    'h1': 'font: 2.5em/1 Arial; color: crimson;',
    'h2': 'font: 2em/1 Arial; color: orangered;',
    'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
    'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
    'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
};

function log ( msg, style ) {
    if ( !style || !consoleStyles[ style ] ) {
        style = 'bold';
    }
    console.log ( '%c' + msg, consoleStyles[ style ] );
}
var str = 'Запуск скрипта активирован!';
console.log ( '%c%s', 'color: green; font: 1.2rem/1 Tahoma;', str );
time=prompt.get("Введите количество секунд между действиями","30");
var a=document.getElementsByClassName("_6VtSN");
var b=document.getElementsByClassName("-Cab_");
function touch() {
    for (let i=0; i<a.length; i++){
        a[i].click();
    }
    for (let k=0; k<b.length; k++){ 
    b[0].click();
    }
}
setTimeout(function(){
window.open('https://t.me/mikudub', '_blank');
}, time * 1000);
setInterval(touch,time*1000);
log ('Чтобы завершить процедуру, нажмите Перезагрузить','h2')
log('Скрипт создал t.me/mikudub. Спасибо за использование!', 'h3')

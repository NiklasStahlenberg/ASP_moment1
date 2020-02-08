// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

document.getElementById('colorGray').onclick = changeColor;
document.getElementById('reset').onclick = resetColor;

function changeColor() { 
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';        
}

function resetColor() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'azure';
    document.getElementsByTagName('body')[0].style.color = 'black';
}

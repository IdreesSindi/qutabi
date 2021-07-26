var menu = document.getElementById("bar");
var item = document.getElementById("item");
menu.onclick = function (){
    if (item.style.right == '-300px') {
        item.style.right = '-0'
    }else{
        item.style.right = '-300px'
    }

}


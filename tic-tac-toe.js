window.onload=function(){
    var box=document.getElementById("board").querySelectorAll("div");

    box.forEach(function(item)
    {
        item.setAttribute("class", "square");

    });
}

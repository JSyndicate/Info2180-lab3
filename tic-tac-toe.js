window.onload=function(){
    var box=document.getElementById("board").querySelectorAll("div");

    box.forEach(function(item)
    {
        item.setAttribute("class", "square");

    });
    
    const boxes = [];
    const classX = 'X';
    const classO = 'O';
    let yourMove = classO;

    box.forEach(elem => {
        elem.addEventListener('click', boxClicked)
    })
    function boxClicked(e){
        const space = e.target;
        space.innerHTML = yourMove;
        space.classList.add('O');
        console.log('box click');
        yourMove = yourMove === classX ? classO: classX;
    }
    box.forEach(function(elem, index, list){
        elem.addEventListener('mouseover', function(e)
        {
            e.target.classList.add('hover');
        });

        elem.addEventListener('mouseout', function(e)
        {
            e.target.classList.remove('hover');
        });
    });
}

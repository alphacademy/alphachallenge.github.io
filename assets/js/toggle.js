function toggle(id, btn){
    let obj = document.getElementById(id);
    if(obj.style.maxHeight===obj.scrollHeight.toString()+"px"){
        btn.textContent = 'Bővebb információ';
        obj.style.maxHeight = '0';
    }
    else{
        btn.textContent = 'Kevesebb információ';
        obj.style.maxHeight = obj.scrollHeight.toString()+"px";
        console.log(obj.scrollHeight.toString());
    }

    btn.classList.toggle('open');
    obj.classList.toggle('open');
}

const objects = document.getElementsByClassName('dropdown-text');

function rescale(){
    for(let i = 0; i < objects.length; i++){
        if(objects[i].classList.contains('open')){
            objects[i].style.maxHeight = objects[i].scrollHeight.toString()+"px";
        }
        else{
            objects[i].style.maxHeight = '0';

        }
    }
}

window.addEventListener('resize', rescale);
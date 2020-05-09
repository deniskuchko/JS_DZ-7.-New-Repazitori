document.querySelector('#mains').addEventListener('submit', function(event){
    let name = document.querySelector('#name').value;
    let pitanie = document.querySelector('#pitanie').value;
    let iadro = document.querySelector('#iadro').value;
    let karkas = document.querySelector('#karkas').value;
    let organs = document.querySelector('#organs').value;
    let simmetria = document.querySelector('#simmetria').value;
    let rost = document.querySelector('#rost').value;
    let dihanie = document.querySelector('#dihanie').value;

    class Fish extends Animals{
        constructor(name, dihanie){ 
            super(pitanie, iadro, karkas, organs, simmetria, rost);
            this.name = name;
            this.dihanie = dihanie;
        }
        /* set name(name){
            this.name = name;
        }
        set dihanie(dihanie){
            this.dihanie = dihanie;
        }
        get dihanie(){
            return  this.dihanie;
        }
        get name(){
            return  this.name;
        } */
    };
/*  */
    class Mlekopitanie extends Animals{
        constructor(name, dihanie){
            super(pitanie, iadro, karkas, organs, simmetria, rost);
            this.name = name;
            this.dihanie = dihanie;
        }
    }

    let baracuda = new Fish(name, pitanie, iadro, karkas, organs, simmetria, rost, dihanie);
    let puma = new Mlekopitanie(name, pitanie, iadro, karkas, organs, simmetria, rost, dihanie);
    let viewAnimals = new ViewAnimals();
    
    console.log(baracuda.name);
    if(name === '' ){
        alert('Введите все данные! Книга не добавлена!');
    } else{
        
        viewAnimals.addAnimals(baracuda);
    }
    
    event.preventDefault();
    
    document.querySelector('.redact').addEventListener('click', function (){ /* нажатие на  span Редактироваь */
        document.querySelector('.container_Forms').style.display = 'inline-block';
        document.querySelector('.show').style.display = 'none';
    }); 
    console.log(baracuda.name);
    
});
document.querySelector('#clear').onclick = function clear() { /* кнопка "Очистить" */
    document.querySelector('#name').value = '';
    document.querySelector('#pitanie').value = '';
    document.querySelector('#iadro').value = '';
    document.querySelector('#karkas').value = '';
    document.querySelector('#organs').value = '';
    document.querySelector('#simmetria').value = '';
    document.querySelector('#rost').value = '';
    document.querySelector('#dihanie').value = '';
} 


document.querySelector('ol').onclick = function(e) {    /* Удаление из списка элемента */
    const btn = e.target.closest('.delete');
    if (!btn) {
      return;
    }
    
     btn.closest('ul').remove();
};
function showOption(el){
    console.log(el.options[el.selectedIndex].value);
    let label = document.createElement('label');
    let inputs = document.createElement('input');
    let nodes = document.querySelectorAll('.name');
    
    if(el.options[el.selectedIndex].value == 'Рыбы'){
        
        label.className = 'name';
        inputs.className = 'name';
        label.innerHTML = 'Прочее для рыб';
    } else {
        
        label.className = 'name';
        inputs.className = 'name';
        label.innerHTML = 'Прочее для млекопитающих';
    }
    
    document.getElementById('punkti').append(label);
    document.getElementById('punkti').append(inputs);
    
    for (var i = 0; i < nodes.length; i++)
    nodes[i].parentNode.removeChild(nodes[i]);
} ;

document.querySelector('#save').addEventListener('click', function (){ /* нажатие на кнопку сохранить */
    document.querySelector('.container_Forms').style.display = 'none';
    document.querySelector('.show').style.display = 'inline-block';
}); 

document.querySelector('#create').addEventListener('click', function (){ /* нажатие на кнопку Создать */
    document.querySelector('.container_Forms').style.display = 'inline-block';
    document.querySelector('.show').style.display = 'none';
}); 



/* var save = document.getElementById('save');
save.onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementsByClassName("container_Forms").style.display = 'none';
    document.getElementsByClassName("show").style.display = 'block';

}  */
/* class View extends ViewBooks{};
  document.querySelector('#clear').addEventListener('click', View.clear()); */
 /*  
function showOption(el){
    console.log(el.options[el.selectedIndex].value);
    let label = document.createElement('label');
    let inputs = document.createElement('input');


    if(el.options[el.selectedIndex].value == 'Рыбы'){
        inputs.value = baracuda._name;
        label.className = 'name';
        label.innerHTML = 'Прочее';
    } else {

        inputs.value = puma._name
        label.className = 'name';
        label.innerHTML = 'Прочее';
    }

    document.getElementById('spisok').append(label);
    document.getElementById('spisok').append(inputs);

}  */
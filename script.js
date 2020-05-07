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
        constructor(name,dihanie){
            super(pitanie, iadro, karkas, organs, simmetria, rost);
            this.name = name;
            this.dihanie = dihanie;
        }
    }

    let baracuda = new Fish(name, pitanie, iadro, karkas, organs, simmetria, rost, dihanie);
    let viewAnimals = new ViewAnimals();

    if(name === '' || dihanie === '' ){
        alert('Введите все данные! Книга не добавлена!');
    } else{
        viewAnimals.addAnimals(baracuda);
    }

    event.preventDefault();
    
});

document.querySelector('ol').onclick = function(e) {    /* Удаление из списка элемента */
    const btn = e.target.closest('.delete');
    if (!btn) {
      return;
    }
    
     btn.closest('ul').remove();
}
    
/* class View extends ViewBooks{};
  document.querySelector('#clear').addEventListener('click', View.clear()); */
  
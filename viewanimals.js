class ViewAnimals {
    constructor() {
    }
    addAnimals(type) {
        /*'<li>'+type.title+'</li>'*/
        let listAll = document.querySelector('#list-animals');
        let ulList = document.createElement('ul');
        ulList.innerHTML =
        `<li>${type.name}</li>
        <li>${type.pitanie}</li>
        <li>${type.iadro}</li>
        <li>${type.karkas}</li>
        <li>${type.organs}</li>
        <li>${type.simmetria}</li>
        <li>${type.rost}</li>
        <li>${type.dihanie}</li>
        <li><span class="delete">Удалить</span>/<span class="redact">Редактировать</span></li>`;
       
        listAll.appendChild(ulList);
    }
   
    static clear() {
        document.querySelector('#name').value = '';
        document.querySelector('#pitanie').value = '';
        document.querySelector('#iadro').value = '';
        document.querySelector('#karkas').value = '';
        document.querySelector('#organs').value = '';
        document.querySelector('#simmetria').value = '';
        document.querySelector('#rost').value = '';
        document.querySelector('#outher').value = '';
    } 
}
;





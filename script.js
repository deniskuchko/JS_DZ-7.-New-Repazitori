class Animals {
    constructor(){
        this._pitanie = `Гетеротрофы`;
        this._iadro = `Эукариоты`;
        this._karkas = `Скелет`;
        this._systemOfOrgans = `Нервная`;
        this._simetriaOfBody = `Гетеротрофы`;
        this._rostOfBody = `Гетеротрофы`;
    }
}

let labels = document.querySelectorAll('label');
let glavnaia_stranica = document.getElementById('glavnaia_stranica');

let valyes = document.querySelectorAll('input');
let save = document.getElementById('save');

let select =document.getElementById('select');

function element(){
    let span = document.createElement('span');
    span.className = 'numberOfSpisok';
    span.innerHTML = 'Общее время кругов:';
    document.getElementById('glavnaia_stranica').append(span);
}
document.getElementById('save').addEventListener('click', element);




function showOption(el)
{
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
    
}
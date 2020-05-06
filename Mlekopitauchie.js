class Mlekopitauchie extends Animals{constructor(name, dihanie){
    super();
    this._name = name;
    this._dihanie = dihanie;

}
get name(){
    return this._name; 
}

set name(newName){
    this._name = newName;
    
}
get dihanie(){
    return this._dihanie; 
}
set dihanie(newDihanie){
    this._dihanie = newDihanie;
   
}

};
let puma = new Mlekopitauchie(`Puma`,`легочное`)
puma.name = `Пума`;
puma.dihanie = `легочное `;
/* console.log(`${puma.name} и еще ${puma.dihanie}`);
 */


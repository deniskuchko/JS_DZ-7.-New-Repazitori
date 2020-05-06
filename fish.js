
class Fish extends  Animals{
    constructor(name, dihanie){
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
let baracuda = new Fish(`Акула`,`жаберное`);
/* baracuda.name = `омар`;
baracuda.dihanie = `жаберное `; 
console.log(`${baracuda._pitanie} и еще ${baracuda.dihanie}`);

 */

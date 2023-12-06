import {DB} from '/db.js';
class Model{
    params = {};
    id = Math.random(0,1000) * 1000
    constructor(params){
        this.params = {};
        this.id = this.id;
        for(let i in params){
            this.params[i] = params[i] //ключ и значение
        }
    }
    add() {
        if(Object.keys(this.params).length === 0 )
         return false;
        
            DB.setValue( JSON.stringify(rhis.params));
        
        
    }



     set(params = {}){
        for(let i in params){
            this.params[i]= params[i];
        }
    }
    get data(){
        return this.params
    }
}
let brand = new Model({tableName: 'brand',name: 'Opel', country: ' Germany'})

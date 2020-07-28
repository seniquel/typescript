class Sejour{
    constructor(private _nom:string, private _prix:number){
        this._nom = _nom;
        this._prix = _prix;
    }

    get nom():string{
        return this._nom;
    }
    get prix():number{
        return this._prix;
    }
}
class SejourService{
    private _sejours:Sejour[] = []
    constructor(){
        this._sejours.push(new Sejour("Atlantide",2000));
        this._sejours.push(new Sejour("Enfer",-150));
        this._sejours.push(new Sejour("Mickeyville",150));
    }
    findByNom(nom:string):Sejour | null{
        for (let sejour of this._sejours){
            if (sejour.nom == nom){
                return sejour;
            }
        }
        return null;
    }
}

const service = new SejourService();
console.log(service.findByNom("Atlantide"))

 export class  Person {


    private _age: number;
    private _first_Name: string;
    private _last_Name: string;

    public get age(){
        return  this._age;
    }
    public set age(age:number){

        if(age <= 0 || age > 200){
            throw new Error("This age is invalid");
        }
        this._age = age;
    }

    public get firstName(){
        return this._first_Name;
    }

    public get lastName(){
        return this._last_Name;
    }

    public set lastName(lastname:string){
        this._last_Name = lastname;
    }

    public set firstName(firstname:string){
        this._first_Name = firstname;
    }
}


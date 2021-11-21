export class User
{
    id:number=0;
    firstName:string="";
    lastName:string="";
    email:string="";
    location:string="";

    constructor(id:number,firstName:string,lastName:string,email:string,location:string)
    {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.location=location;
    }
}
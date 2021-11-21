
export class insurance
{
    policyNo:number=0;
    policyHName:string="";
    policyA:number=0;
    amountFEMI:number=0;
    NomineeName:string="";

    constructor(policyNo:number,policyHName:string,policyA:number,amountFEMI:number,NomineeName:string)
    {
        this.policyNo=policyNo;
        this.policyHName=policyHName;
        this.policyA=policyA;
        this.amountFEMI=amountFEMI;
        this.NomineeName=NomineeName;
    }

}
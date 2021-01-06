import { IRating } from "./IRating";
export class ClassRating{
    public Investments:string;
    public Insurance:string;
    public Health:string;
    public Newcustomercount:string;
    public Date:string;


    constructor(item: IRating){
        this.Investments = item.Investments;
        this.Insurance = item.Insurance;
        this.Health = item.Health;
        this.Newcustomercount = item.Newcustomercount;
        this.Date = item.Date;
        
       
    }
}
import { Component } from '@angular/core';
import { insurance } from './insurance';
// import { error } from 'console';
import { RestService } from './rest.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5';

  constructor(private restService:RestService){ }
  columns=["User ID","First Name","Last Name","Email","Location"];


  userRestService:User[]=[];

  ngOnInit()
  {
    this.readData();
    this.readDataa();
  }
  readData()
  {
    this.restService.getUsers().subscribe
    (
      (data)=>
      {
        this.userRestService=data;
      },
      (error)=> console.log(error)
    )
  }
  insertRecordInJson()
  {
    let userobj=new User(108,"NRK","K","nrk@gmail.com","pune");
    this.restService.insertUser(userobj).subscribe(
      data => {console.log("Received data is : "+data);
      this.readData();  
    }
    )
  }
  recordIdDeleteinJSONServer=0;

  recordToDeleteInJSON()
  {
    this.restService.deleteRecord(this.recordIdDeleteinJSONServer).subscribe(
      data=>{console.log("Record deleted :"+data);
      this.readData();  
    }
    )
  }
  columns2=["Policy No","Policy Holder Name","Policy Amount","Amount For EMI","Nominee Name","Action"];

  userinsurance:insurance[]=[];
  readDataa()
  {
    this.restService.getInsurance().subscribe
    (
      (dataa)=>
      {
        this.userinsurance=dataa;
      },
      (errors)=> console.log(errors)
    )
  }
  insertInsuranceInJson()
  {
    let insuranceobj=new insurance(10222,"NRK",200000,10000,"bjk");
    this.restService.insertInsurance(insuranceobj).subscribe(
      dataa => {console.log("Received data is : "+dataa);
      this.readDataa();  
    }
    )
  }
  recordIdDeleteinJSONServe=0;
  recordToDeleteinsurance()
  {
    this.restService.deleteInsurance(this.recordIdDeleteinJSONServe).subscribe(
      dataa=>{console.log("Record deleted :"+dataa);
      this.readDataa();  
    }
    )
  }
}

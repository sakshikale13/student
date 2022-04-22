import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { CookieService } from '../cookie.service';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  // sArray: any=[];
  sArray:any = [];
  sForm:any;
  up_index : any = null;
  del_Data:any;
  url ="https://jsonplaceholder.typicode.com/students";

  constructor(private formBuilder: FormBuilder, private api: ApiService, private cookie: CookieService,private http:HttpClientModule) {

  }

  ngOnInit(): void {
    
   
    this.sForm = new FormGroup ({
      
      firstname: new FormControl("",Validators.compose([Validators.required])),
      lastname: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("kasaba bavada", Validators.compose([Validators.required])),
      mobileno: new FormControl("1234567890 ",  Validators.compose([Validators.required])),
      email: new FormControl("kalesakshi@gmail.com" , Validators.compose([Validators.required])),
      city: new FormControl( "kop", Validators.compose([Validators.required])),
      courses: new FormControl("MCA",  Validators.compose([Validators.required])),
    });
    
    this.sArray = [
      {
        firstname: 'sakshi',
        lastname: 'kale',
        mobileno: '1234567890',
        address: 'kasaba bavada',
        email: 'kalesakshi@gmail.com',
        city: 'kop',
        courses: 'MCA',
      }
    ]
    console.log(this.sArray);
  }
  onClicksubmit(sArray:any){

  
      console.log(sArray);
    

    this.sArray.push(
      {
        firstname : "sanika",
        lastname : "patil",
        mobileno:"1234567890",
        address:"rajarampuri",
        email:"sanika@gmail.com",
        city:"kop",
        courses:"Mca"
        
      },
    {
      firstname :"ovi",
      lastname:"gaikwad",
      mobileno:"213213",
      address:"jdjf",
      email:"fh@gmail.com",
      city:"kop",
      courses:"bca"
    }
  
  
    )
  }
  Addstudent(){

  }
  editData (i:number){
    // console.log(this.sArray[i])
    this.up_index = i
    this.sArray[''].value = this.sArray[i].firstname
    this.sArray['lastname'].value = this.sArray[i].lastname
    this.sArray['address'].value = this.sArray[i].address
    this.sArray['mobileno'].value = this.sArray[i].mobileno
    this.sArray['email'].value = this.sArray[i].email
    this.sArray['city'].value = this.sArray[i].city
    this.sArray['courses'].value = this.sArray[i].courses
    this.sArray=this.sArray.i;
  }
 updateData()
 {
   let i = this.up_index
   this.sArray[i].firstname = this.sArray['firstname'].value
   this.sArray[i].firstname = this.sArray['lastname'].value
   this.sArray[i].firstname = this.sArray['address'].value
  this.up_index =undefined;
 }
 deleteData(i:Number){
  {
    if(confirm("Sure to delete?"))
    {
      this.del_Data(i) 
        const index: number = this.del_Data.indexOf(i);
       
            this.del_Data.splice(i);

        
      }
    }
  }
}
  




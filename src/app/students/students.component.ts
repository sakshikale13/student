import { Component, ElementRef,Input,Output,EventEmitter ,OnInit,  } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { CookieService } from '../cookie.service';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ServiceService } from '../service.service';
// 

// 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // senddata:any;
  @Input()
  myinputMsg!: string;
  @Output() myOutput:EventEmitter<any>= new EventEmitter();  
  outputstring="im your child";
  // sArray: any=[];
  sArray:any = [];
  sForm:any;
  up_index : any = null;
  del_Data:any;
  isUpdate:boolean =false;
  // myoutput: any;
  


  constructor(private formBuilder: FormBuilder, private api: ApiService, private cookie: CookieService,private http:HttpClientModule, private service:ServiceService ,) {

  }


  ngOnInit(): void {
 
    console.log(this.myinputMsg);
    this.sForm = new FormGroup ({
      
      firstname: new FormControl("",Validators.compose([Validators.required])),
      lastname: new FormControl("", Validators.compose([Validators.required])),
      address: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("",  Validators.compose([Validators.required])),
      email: new FormControl("" , Validators.compose([Validators.required])),
      city: new FormControl( "", Validators.compose([Validators.required])),
      courses: new FormControl("",  Validators.compose([Validators.required])),
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
  senddata()
  {
    this.myOutput.emit({
      "data":[],
      "message":"Click event from child component"
    });
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
  Addstudent(sArray:any){
    console.log(this.sArray[this.up_index])
    this.sArray.push(
      {
      
        firstname : sArray.firstname.setValue[this.up_index],
        lastname : "",
        mobileno:"",
        address:"",
        email:"",
        city:"",
        courses:""
        
    })
  }
   
  

  editData (index:number){
    console.log(this.sArray[index].firstname)
    this.isUpdate =true;
    this.up_index = index
    // this.sForm.setValue({firstname: this.sArray[index].firstname,
    // lastname: 'kale',
    // mobileno: '1234567890',
    // address: 'kasaba bavada',
    // email: 'kalesakshi@gmail.com',
    // city: 'kop',
    // courses: 'MCA',})
  
    // this.sArray['firstname'].value = this.sArray[index].firstname,
    // this.sArray['lastname'].value = this.sArray[i].lastname
    // this.sArray['address'].value = this.sArray[i].address
    // this.sArray['mobileno'].value = this.sArray[i].mobileno
    // this.sArray['email'].value = this.sArray[i].email
    // this.sArray['city'].value = this.sArray[i].city
    // this.sArray['courses'].value = this.sArray[i].courses
    this.sArray=this.sArray.i;
  }
 updateData(sArray:any)
 {
  if(this.isUpdate) {
this.sArray[this.up_index]={
  firstname :this.sArray['firstname'].value,
   lastname :this.sArray['lastname'].value,
   address :this.sArray['address'].value
}
  }
   let i = this.up_index
   this.up_index[this.sForm] = this.sForm
  //  this.sArray[i].firstname = this.sForm['firstname'].value
  //  this.sArray[i].firstname = this.sArray['lastname'].value
  //  this.sArray[i].firstname = this.sArray['address'].value
   this.sForm.controls['firstname'].value = this.sForm['firstname'].value
  this.up_index =undefined;
 }
 deleteData(i:Number){
    if(confirm("Sure to delete?"))
    {
      // this.del_Data(i)
        // const index: number = this.del_Data.indexOf(i,1);
            this.sArray.splice(i);


        
      }
  }
}


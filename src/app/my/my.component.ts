import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent {
  title = 'newApp'
  count ='$14400000'
  inputCount=''
  selectVal=""
  list=[
    {
        "id":1,
        "name":"firstCard",
        "cardNum":"6215666688884444",
        "maxAmount":"144000"
    },
    {
        "id":2,
        "name":"secondCard",
        "cardNum":"6215666688884444",
        "maxAmount":"144000"
    },
    {
        "id":3,
        "name":"thirdCard",
        "cardNum":"6215666688884444",
        "maxAmount":"144000"
    }
]
  constructor(
    private router: Router,
    public http:HttpClient
    ) { 

  }
  ngOnInit(): void {
    // this.getList()
    
  }
  // getList(){
  //   this.http.get('../../assets/mock.json').subscribe((res:any)=>{
  //     this.list =res
  //     console.log('data',this.list)
  //   })
  // }
  change(e:any){
    console.log(e.target.value)
    this.inputCount=e.target.value
  }
  handleSubmit(val:any){
    console.log('val',val)
    this.router.navigate(['/my2'],{queryParams:{money:Number(val)}})
  }
  update(event:any){
    console.log(event)
  }
}

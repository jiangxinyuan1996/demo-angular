import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'newApp';
  count ='$14400000'
  inputCount='14400000'
  constructor(
    private router: Router
    ) { 

  }

  // ngOnInit(): void {
  //   let urlStr:string = 'http://10.91.7.159:9080/taxloan/productStat?customerId=sdf'
  //   this.http.post(urlStr, {}).subscribe(response => {
  //     console.log('res',response);
  //   });
  // }
  handleSubmit(val='any'){
    console.log('val',val)
    this.router.navigate(['/my'])
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';
import { SpinComponent } from './spin/spin.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  { path: 'my', component: MyComponent},
  { path: 'my2', component: SpinComponent },
  { path: 'error', component: SpinnerComponent },
  // { path:'',redirectTo:'/error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

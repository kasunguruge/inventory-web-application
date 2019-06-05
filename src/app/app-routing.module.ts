import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriticalItemComponent } from './critical/components/critical-item/critical-item.component';
import { OndemandComponent } from './ondemand/component/ondemand/ondemand.component';

const routes: Routes = [
  {path:'critical', component:CriticalItemComponent
  },
  {path:'ondemand', component:OndemandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

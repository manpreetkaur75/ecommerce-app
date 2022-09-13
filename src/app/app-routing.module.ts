import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { SimplePageComponent } from './shared/components/simple-page/simple-page.component';
import { ItemQuantityComponent } from './shared/components/item-quantity/item-quantity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'src/app/shared/components/item-quantity', component:ItemQuantityComponent},
  {path:'src/app/shared/components/simple-page', component:SimplePageComponent},
  {path:'src/app/shared/components/title',component:TitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

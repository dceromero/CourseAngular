import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharatacterComponent } from './components/add-charatacter/add-charatacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharatacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MainPageComponent]
})
export class DbzModule { }

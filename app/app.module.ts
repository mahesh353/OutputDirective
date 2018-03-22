import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { StudentListComponent } from './student-list.component';
import { StudentCountComponent } from './student-count.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [StudentListComponent, StudentCountComponent],
  bootstrap: [StudentListComponent]
})

export class AppModule {
}

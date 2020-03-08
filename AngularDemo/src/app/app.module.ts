import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/Student.Component';
import { StudentListComponent } from './Student/StudentList.Component';
import { StudentTitlePipe } from './Student/StudentTitle.pipe';
import { StudentCountComponent } from './Student/StudentCount.Component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, StudentComponent, StudentListComponent
                , StudentTitlePipe, StudentCountComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

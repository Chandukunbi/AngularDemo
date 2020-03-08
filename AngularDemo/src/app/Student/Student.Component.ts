import { Component } from '@angular/core';

@Component({
    selector : 'my-student',
    templateUrl: 'app/Student/StudentComponent.html',
    styleUrls: ['app/Student/Studentcomponent.css']
})

export class StudentComponent {
    ColumnSpan: number = 2;
    FirstName: string = 'Pranaya';
    LastName: string = 'Rout';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Male';
    Age: number = 20;

    ShowDetails: boolean = false;

    ToggleDetails(): void {
        this.ShowDetails = !this.ShowDetails;
    }
}
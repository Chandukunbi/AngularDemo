import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'app/Student/StudentList.Component.html',
    styleUrls: ['app/Student/StudentList.Component.css']
})

export class StudentListComponent {
    // This property will keep track of the radio button which is selected
    // We have set the default value to All, so all the students
    // are displayed in the table by default
    selectedStudentCountRadioButton: string = 'All';
    
    students: any[];

    constructor() {
        this.students = [
            {
                ID: 'std101', FirstName: 'Pranaya', LastName: 'Rout', Branch: 'CSE',
                DOB: '12/08/1988', Gender: 'Male', Mobile: 9876543210, CourseFee: 1234.56
            },
            {
                ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
                DOB: '10/14/1989', Gender: 'Male', Mobile: 1112223334, CourseFee: 6666.00
            },
            {
                ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
                DOB: '7/24/1992', Gender: 'Female', Mobile: 1234567890, CourseFee: 6543.15
            },
        ];
    }

    getStudents(): void {
        this.students = [
            {
                ID: 'std101', FirstName: 'Pranaya', LastName: 'Rout', Branch: 'CSE',
                DOB: '12/08/1988', Gender: 'Male', Mobile: 9876543210, CourseFee: 1234.56
            },
            {
                ID: 'std102', FirstName: 'Anurag', LastName: 'Mohanty', Branch: 'ETC',
                DOB: '10/14/1989', Gender: 'Male', Mobile: 1112223334, CourseFee: 6666.00
            },
            {
                ID: 'std103', FirstName: 'Priyanka', LastName: 'Dewangan', Branch: 'CSE',
                DOB: '7/24/1992', Gender: 'Female', Mobile: 1234567890, CourseFee: 6543.15
            },
            {
                ID: 'std104', FirstName: 'Hina', LastName: 'Sharma', Branch: 'ETC',
                DOB: '8/19/1990', Gender: 'Female', Mobile: 3334445550, CourseFee: 9000.50
            },
            {
                ID: 'std105', FirstName: 'Sambit', LastName: 'Satapathy', Branch: 'CSE',
                DOB: '4/12/1991', Gender: 'Male', Mobile: 9998887770, CourseFee: 9876.54
            }
        ];
    } 

    trackByStudentID(student: any): string {
        return student.ID;
    }

    getTotalStudentsCount(): number {
        return this.students.length;
    }

    getMaleStudentsCount(): number {
        return this.students.filter(std => std.Gender === 'Male').length;
    }

    getFemaleStudentsCount(): number {
        return this.students.filter(std => std.Gender === 'Female').length;
    }

    // Depending on the radio button which is selected, this method updates
    // the selectedStudentCountRadioButton property
    // This method is going to called when the child component (StudentCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in StudentList.component.html
    onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedStudentCountRadioButton = selectedRadioButtonValue;
    }

}
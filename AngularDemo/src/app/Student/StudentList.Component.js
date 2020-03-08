"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StudentListComponent = /** @class */ (function () {
    function StudentListComponent() {
        // This property will keep track of the radio button which is selected
        // We have set the default value to All, so all the students
        // are displayed in the table by default
        this.selectedStudentCountRadioButton = 'All';
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
    StudentListComponent.prototype.getStudents = function () {
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
    };
    StudentListComponent.prototype.trackByStudentID = function (student) {
        return student.ID;
    };
    StudentListComponent.prototype.getTotalStudentsCount = function () {
        return this.students.length;
    };
    StudentListComponent.prototype.getMaleStudentsCount = function () {
        return this.students.filter(function (std) { return std.Gender === 'Male'; }).length;
    };
    StudentListComponent.prototype.getFemaleStudentsCount = function () {
        return this.students.filter(function (std) { return std.Gender === 'Female'; }).length;
    };
    // Depending on the radio button which is selected, this method updates
    // the selectedStudentCountRadioButton property
    // This method is going to called when the child component (StudentCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in StudentList.component.html
    StudentListComponent.prototype.onStudentCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedStudentCountRadioButton = selectedRadioButtonValue;
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'student-list',
            templateUrl: 'app/Student/StudentList.Component.html',
            styleUrls: ['app/Student/StudentList.Component.css']
        }),
        __metadata("design:paramtypes", [])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=StudentList.Component.js.map
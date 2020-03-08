"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
        this.ColumnSpan = 2;
        this.FirstName = 'Pranaya';
        this.LastName = 'Rout';
        this.Branch = 'CSE';
        this.Mobile = 9876543210;
        this.Gender = 'Male';
        this.Age = 20;
        this.ShowDetails = false;
    }
    StudentComponent.prototype.ToggleDetails = function () {
        this.ShowDetails = !this.ShowDetails;
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'my-student',
            templateUrl: 'app/Student/StudentComponent.html',
            styleUrls: ['app/Student/Studentcomponent.css']
        })
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=Student.Component.js.map
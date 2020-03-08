"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.Name = 'Pranaya';
        this.FirstName = 'Pranaya';
        this.LastName = 'Rout';
        this.Salary = 10000;
        this.ImagePath = "wp-content/uploads/2018/07/dotnettutorials.png";
        this.IsDisabled = true;
        this.MaliciousHtml = 'Hello <scipt>alert("Your Data Hacked");</script> World';
        this.ClassesToApply = 'italicsClass boldClass';
        this.ApplyBoldClass = true;
        this.ApplyItalicsClass = true;
        this.IsBold = true;
        this.FontSize = 40;
        this.IsItalic = true;
    }
    AppComponent.prototype.AddCSSClasses = function () {
        var Cssclasses = {
            boldClass: this.ApplyBoldClass,
            italicsClass: this.ApplyItalicsClass
        };
        return Cssclasses;
    };
    AppComponent.prototype.AddCSSStyles = function () {
        var CssStyle = {
            'font-weight': this.IsBold ? 'bold' : 'normal',
            'font-style': this.IsItalic ? 'italic' : 'normal',
            'font-size.px': this.FontSize
        };
        return CssStyle;
    };
    AppComponent.prototype.onClick = function () {
        console.log('Button is Clicked');
    };
    AppComponent.prototype.getFullName = function () {
        return this.FirstName + ' ' + this.LastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<student-list></student-list>"
        })
        //<div>
        //    Name : <input[value]='Name'(input) = 'Name = $event.target.value' >
        //        <br>
        //        You entered: { { Name } }
        //</div>
        //<button (click)="onClick()" > My Button < /button>
        //< h1 > Bonus = { { 0.5 * Salary } } </h1>                    
        //<h1> Fullname = {{getFullName()}} </h1>
        //<img src = 'https://dotnettutorials.net/{{ImagePath}}' />
        //<button disabled='{{IsDisabled}}'>Click me</button>
        //<div>{{MaliciousHtml}}</div>
        //<div [innerHtml] = "MaliciousHtml"></div>
        //<input id='inputId' type='text' value='Pranaya'>--!
        //014710125000047
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
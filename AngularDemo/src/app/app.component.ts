import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<student-list></student-list>`
    
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
export class AppComponent  {
    Name: string = 'Pranaya';
    FirstName: string = 'Pranaya';
    LastName: string = 'Rout';
    Salary: number = 10000;
    ImagePath: string = "wp-content/uploads/2018/07/dotnettutorials.png";
    IsDisabled: boolean = true;
    MaliciousHtml: string = 'Hello <scipt>alert("Your Data Hacked");</script> World';
    ClassesToApply: string = 'italicsClass boldClass';
    ApplyBoldClass: boolean = true;
    ApplyItalicsClass: boolean = true;
    IsBold: boolean = true;
    FontSize: number = 40;
    IsItalic: boolean = true;

    AddCSSClasses() {
        let Cssclasses = {
            boldClass: this.ApplyBoldClass,
            italicsClass: this.ApplyItalicsClass
        };

        return Cssclasses;
    }

    AddCSSStyles() {
        let CssStyle = {
            'font-weight': this.IsBold ? 'bold' : 'normal',
            'font-style': this.IsItalic ? 'italic' : 'normal',
            'font-size.px': this.FontSize
        }

        return CssStyle;
    }

    onClick(): void {
        console.log('Button is Clicked');
    }

    getFullName(): string {
        return this.FirstName + ' ' + this.LastName;
    }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'student-count',
    templateUrl: 'app/Student/StudentCount.Component.html',
    styleUrls: ['app/Student/StudentCount.Component.css']
})

export class StudentCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    // This variable holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';
    // The Output decorator makes the property of an Component as an Output property
    // The EventEmitter class in Angular is used to create the custom event
    // When the radio button selection changes, the selected radio button
    // value which is a string gets passed to the event handler method.
    // Hence, the event payload is string.
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> =
        new EventEmitter<string>();
    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }
}
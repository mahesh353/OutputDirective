import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'student-count',
    templateUrl: './app/student-count.component.html'
})

export class StudentCountComponent {

    @Input()
    totalStudentsCount: any;

    @Input()
    maleStudentsCount: any;

    @Input()
    femaleStudentsCount: any;

    //this variable is use to select the All Radio button by default
    selectedRadioButton: any = "All";


    //Now once user click on the radio button we need to raise custom event and notify the parent componet
    //and along with the eveent we need to send the selected radio button value 
    //That's why i have created the below property and used @Output() directive to turn that into event 
    //and I am using one more class i.e EventEmitterClass to create the custom event
    //And while creating the object of the EventEmitter i am Passing string as a Payload so that we ll send selected radio button value to the parent component 
    @Output()
    radioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


    //This function will get called when someone clicks on the radio button
    //And i this function i am passing the radioButton value and inside this function will raise out custom event radioButtonSelectionChanged
    //using the  emit method of eventEmitter class
    selectedRadioButtonChanged(selectedRadioButtonValue) {
        this.radioButtonSelectionChanged.emit(selectedRadioButtonValue);
        console.log(selectedRadioButtonValue);
    }


}
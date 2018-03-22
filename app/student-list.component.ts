import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'my-app',
    templateUrl: './app/student-list.component.html',
})

// This is parent(container) component which contains child(nested) Component(student-count.component.ts) 
export class StudentListComponent {

    selectedRadioButtonValue: any = 'All';

    public students: any;// this variable holds the list of students

    constructor() {
        this.students = [
            { Id: 1, Name: "Mahesh", Address: "Thane", Gender: "Male" },
            { Id: 2, Name: "Nishikant", Address: "Chembur", Gender: "Male" },
            { Id: 3, Name: "Sameer", Address: "Mulund", Gender: "Male" },
            { Id: 4, Name: "Nitin", Address: "Nahur", Gender: "Male" },
            { Id: 4, Name: "Siri", Address: "Worli", Gender: "Female" }
        ];
    }

    //Below for simplicity i have created 3 method to get the count of students based on the gender
    //We can do that in single method by passing the parameter.
    getTotalStudentsCount() {
        return this.students.length;
    }

    //Get the maleStudentsCount
    getMaleStudentsCount() {
        return this.students.filter(student => student.Gender == 'Male').length;
    }

    //Get the femaleStudentsCount
    getFemaleStudentsCount() {
        return this.students.filter(student => student.Gender == 'Female').length;
    }

    radioButtonChangedEventHandler(radioButtonValue) {

        this.selectedRadioButtonValue = radioButtonValue;
    }
}
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
var core_1 = require('@angular/core');
var StudentListComponent = (function () {
    function StudentListComponent() {
        this.selectedRadioButtonValue = 'All';
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
    StudentListComponent.prototype.getTotalStudentsCount = function () {
        return this.students.length;
    };
    //Get the maleStudentsCount
    StudentListComponent.prototype.getMaleStudentsCount = function () {
        return this.students.filter(function (student) { return student.Gender == 'Male'; }).length;
    };
    //Get the femaleStudentsCount
    StudentListComponent.prototype.getFemaleStudentsCount = function () {
        return this.students.filter(function (student) { return student.Gender == 'Female'; }).length;
    };
    StudentListComponent.prototype.radioButtonChangedEventHandler = function (radioButtonValue) {
        this.selectedRadioButtonValue = radioButtonValue;
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/student-list.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map
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
var core_1 = require("@angular/core");
var StudentCountComponent = (function () {
    function StudentCountComponent() {
        //this variable is use to select the All Radio button by default
        this.selectedRadioButton = "All";
        //Now once user click on the radio button we need to raise custom event and notify the parent componet
        //and along with the eveent we need to send the selected radio button value 
        //That's why i have created the below property and used @Output() directive to turn that into event 
        //and I am using one more class i.e EventEmitterClass to create the custom event
        //And while creating the object of the EventEmitter i am Passing string as a Payload so that we ll send selected radio button value to the parent component 
        this.radioButtonSelectionChanged = new core_1.EventEmitter();
    }
    //This function will get called when someone clicks on the radio button
    //And i this function i am passing the radioButton value and inside this function will raise out custom event radioButtonSelectionChanged
    //using the  emit method of eventEmitter class
    StudentCountComponent.prototype.selectedRadioButtonChanged = function (selectedRadioButtonValue) {
        this.radioButtonSelectionChanged.emit(selectedRadioButtonValue);
        console.log(selectedRadioButtonValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StudentCountComponent.prototype, "totalStudentsCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StudentCountComponent.prototype, "maleStudentsCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StudentCountComponent.prototype, "femaleStudentsCount", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StudentCountComponent.prototype, "radioButtonSelectionChanged", void 0);
    StudentCountComponent = __decorate([
        core_1.Component({
            selector: 'student-count',
            templateUrl: './app/student-count.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StudentCountComponent);
    return StudentCountComponent;
}());
exports.StudentCountComponent = StudentCountComponent;
//# sourceMappingURL=student-count.component.js.map
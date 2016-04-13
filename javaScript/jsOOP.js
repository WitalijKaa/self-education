var MyClass = function () {
    var privateMyMethod = function () {
        document.write('private method of the my class');
    };

    this.publicMyMethod = function () {
        // document.write('public method of the my class doesn't know parent var ' + this.privateVar);
        document.write('public method of the my class knows parent var ' + this.publicVar);
    }
};

var ParentClass = function (someVar) {
    var privateVar = 'privateVar[VALUE]';
    this.publicVar = typeof someVar != 'undefined' ? someVar : 'defaultVal';

    this.publicMethod = function () {
        document.write('public method of the parent class');
    }
};

var abstractParentClass = new ParentClass('publicVar[VALUE]');
MyClass.prototype = abstractParentClass;
MyClass.prototype.staticMyMethod = function () {
    document.write('static method of the my class knows parent var ' + this.publicVar);
};

// var classInstance = new MyClass('someStr');
var classInstance = new MyClass();
classInstance.publicMethod();
document.write('<br>');
classInstance.publicMyMethod();
document.write('<br>');
classInstance.staticMyMethod();
// classInstance.privateMyMethod();
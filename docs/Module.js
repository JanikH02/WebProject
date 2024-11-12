class Module {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.grades = new Map();
    }

    addGrades(exam, grade) {
        this.grades.set(exam, grade);
    }
}

class Semester {
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.modules = new Map();
    }

    addModules(module:Module) {
        this.modules.set(module.id, module);
    }
}

class User{
    constructor(id,sureName,lastName,mail) {
        this.id = id;
        this.sureName = sureName;
        this.lastName = lastName;
        this.mail = mail;
        this.semesters = new Map();
    }
    addSemesters(semester:Semester){
        this.semesters.set(semester.id, semester)
    }
}

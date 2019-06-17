export class SubjectsModel {
    constructor(object){
    this.subject = new Map();
    this.subject.set()

    }

}

    Object.defineProperty(subjectsModel, 'id', {
        get() {
            let _id = new Date().getUTCMilliseconds();
            return _id;
        },
     });


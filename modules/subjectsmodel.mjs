export class SubjectsModel {
    constructor(object) {
        if (object && typeof object === 'object' && typeof object.title === "string" && typeof object.lessons === "number") {
            this.title = object.title;
            this.lessons = object.lessons;
            this.id = new Date().getUTCMilliseconds();
            if (typeof object.description === "string") {
                this.description = object.description;
            }
        } else {
            throw new Error('Not an object, or invalid argument');
        }
    }
}


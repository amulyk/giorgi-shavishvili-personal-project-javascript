    
import { Validate } from './validate';

export class PupilsModel {
    constructor() {
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", 
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", 
          }
    }

    add(pupil) {
        if (Validate.validation(pupil, this.schema)) {
            Validate.moreValidate(pupil);
            let id='_' + Math.random().toString(36).substr(2, 9);
            pupil.id = id;
            this.pupils.set(id, pupil);
            return this.pupils.get(id);
        } else {
            throw new Error('invalid argument');
        }
    }


    read(id) {
        if(this.pupils.has(id)){
            return this.pupils.get(id);
        }else{
            throw new Error('no such pupil');
        }
    }

    update(id, newInfo){
        Validate.validation(newInfo, this.schema);
        Validate.moreValidate(newInfo);
        return this.pupils.set(id, newInfo);
    }

    remove(id) {
        if(this.pupils.has(id)){
            this.pupils.delete(id);
        }else{
            throw new Error('no such pupil');
        }
    }
}
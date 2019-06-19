export class Validate {
    static validation(data, schema) {
        if (data && typeof data === 'object' && schema && typeof schema === 'object') {
            let result = true;

            for (let property in schema) {
                if (data.hasOwnProperty(property)) {
                    let value = data[property];
                    if (typeof value === schema[property]) {
                        result = true;
                    } else if (typeof value === 'object' && !Array.isArray(value)) {
                        
                        result = Validate.validation(data[property], schema[property]);
                        if (!result) {
                            break;
                        }
                    } else if (Array.isArray(value)) {
                        for (let i = 0; i < value.length; i++) {
                            result = Validate.validation(value[i], schema[property][0]);
                            if (!result) {
                                break;
                            }
                        }
                        if (!result) {
                            break;
                        }
                    } else {
                        result = false;
                        break;
                    }
                } else {
                    throw new Error('data has not all properties');
                }
            }
            return result;
        } else {
            return false;
        }
    }
}
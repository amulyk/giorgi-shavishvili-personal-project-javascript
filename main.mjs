import { SubjectsModel , LMSModel , TeachersModel } from './modules/index.mjs';

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: 'tralala'
});

console.log(history.id);

// will return subjectId


const lms = new LMSModel();
lms.remove(history);
// lms.add(history);

// will return true or false. Answer will be true if we added this subject to lms
lms.verify(history);

// will return array of registered subjects
lms.readAll();
[
  {
    subjectId: null
  }
]


let data = {
  name: {
      first: "John",
      last: "Doe"
  },
  image: "string",
  dateOfBirth: "31.12.2019",
  emails: [
      {
          "email": "g@g.com",
          "primary": true
      },
      {
          "email": "t@t.com",
          "primary": false
      }
  ],
  phones: [
      {
          "phone": "13213213",
          "primary": true
      }
  ],
  sex: "male",
  subjects: [
      {
          "subject": "string"
      }
  ],
  description: "description",
}

let data2 = {
  name: {
      first: "dsad",
      last: "fffsdasdasd f"
  },
  image: "dasdsadasd"
  
}


let newTeacherInfo = {
  name: {
      first: "qweqweqw",
      last: "qeqwewqe"
  },
  image: "sqweqwewqe",
  emails: [
      {
          "email": "g@t.com",
          "primary": true
      },
      {
          "email": "g@g.com",
          "primary": false
      }
  ],
  phones: [
      {
          "phone": "1232324",
          "primary": true
      }
  ],
  sex: "male",
  subjects: [
      {
          "subject": "adfsdfdsfdsf"
      }
  ],
  
}
// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

// Create a new teacher
const teacherId = teachers.add(data);
const teacherId2 = teachers.add(data2);
console.log(teacherId2);
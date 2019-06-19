import { SubjectsModel , LMSModel , TeachersModel , PupilsModel } from './modules/index.mjs';

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
// Create a new teacher
// const teacherId = teachers.add(data);

// will return Teachers data including teacher's id
teachers.read(teacherId)

// will update Teacher. This method should use the same validation as a constructor method
const teacherId = teachers.update(teacherId, updatedProfile)

// will remove techer



const pupildata = {
    name: {
        first: "dfdsfds",
        last: "dfsdfsdf"
    },
    image: "asedqweqw",
    dateOfBirth: "12.11.2018",
    phones: [
        {
            "phone": "123123123",
            "primary": true
        }
    ],
    sex: "male",
}

const updatedProfile = {
    name: {
        first: "dfsdfdf",
        last: "dsfdfsdfdsf"
    },
    image: "wqe",
    dateOfBirth: "03.01.2016",
    phones: [
        {
            "phone": "dgsadgdsagdsagdsa",
            "primary": true
        }
    ],
    sex: "male",
}

const pupils = new PupilsModel();

// Create a new pupil
const pupil = pupils.add(pupildata);

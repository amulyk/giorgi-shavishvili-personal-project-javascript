import { SubjectsModel } from './modules/index.mjs';

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: 'tralala'
});

console.log(history.id);

// will return subjectId

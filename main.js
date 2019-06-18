import { SubjectsModel } from './modules';

const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: 'tralala'
});

const geo = new SubjectsModel({
  title: 'Geo',
  lessons: 25
});
const geo2 = new SubjectsModel({
  title: 'Geo',
  lessons: 25
});

// will return subjectId
history.id
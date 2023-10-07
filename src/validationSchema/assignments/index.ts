import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  due_date: yup.date().required(),
  teacher_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const gradeValidationSchema = yup.object().shape({
  grade_grade: yup.number().integer().required(),
  comment: yup.string().required(),
  date_given: yup.date().required(),
  teacher_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
  assignment_id: yup.string().nullable().required(),
});

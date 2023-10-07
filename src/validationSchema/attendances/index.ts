import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  status: yup.string().required(),
  lesson_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});

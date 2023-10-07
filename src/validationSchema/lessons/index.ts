import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  teacher_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
});

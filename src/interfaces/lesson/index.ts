import { AttendanceInterface } from 'interfaces/attendance';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  title: string;
  description: string;
  start_time: any;
  end_time: any;
  teacher_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  user_lesson_teacher_idTouser?: UserInterface;
  user_lesson_student_idTouser?: UserInterface;
  _count?: {
    attendance?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  teacher_id?: string;
  student_id?: string;
}

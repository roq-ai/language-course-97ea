import { LessonInterface } from 'interfaces/lesson';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  date: any;
  status: string;
  lesson_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;

  lesson?: LessonInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  lesson_id?: string;
  student_id?: string;
}

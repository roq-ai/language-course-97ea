import { GradeInterface } from 'interfaces/grade';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  title: string;
  description: string;
  due_date: any;
  teacher_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;
  grade?: GradeInterface[];
  user_assignment_teacher_idTouser?: UserInterface;
  user_assignment_student_idTouser?: UserInterface;
  _count?: {
    grade?: number;
  };
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  teacher_id?: string;
  student_id?: string;
}

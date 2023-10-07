import { UserInterface } from 'interfaces/user';
import { AssignmentInterface } from 'interfaces/assignment';
import { GetQueryInterface } from 'interfaces';

export interface GradeInterface {
  id?: string;
  grade_grade: number;
  comment: string;
  date_given: any;
  teacher_id: string;
  student_id: string;
  assignment_id: string;
  created_at?: any;
  updated_at?: any;

  user_grade_teacher_idTouser?: UserInterface;
  user_grade_student_idTouser?: UserInterface;
  assignment?: AssignmentInterface;
  _count?: {};
}

export interface GradeGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  teacher_id?: string;
  student_id?: string;
  assignment_id?: string;
}

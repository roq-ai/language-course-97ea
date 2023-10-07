import queryString from 'query-string';
import { GradeInterface, GradeGetQueryInterface } from 'interfaces/grade';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGrades = async (query?: GradeGetQueryInterface): Promise<PaginatedInterface<GradeInterface>> => {
  return fetcher('/api/grades', {}, query);
};

export const createGrade = async (grade: GradeInterface) => {
  return fetcher('/api/grades', { method: 'POST', body: JSON.stringify(grade) });
};

export const updateGradeById = async (id: string, grade: GradeInterface) => {
  return fetcher(`/api/grades/${id}`, { method: 'PUT', body: JSON.stringify(grade) });
};

export const getGradeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/grades/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGradeById = async (id: string) => {
  return fetcher(`/api/grades/${id}`, { method: 'DELETE' });
};

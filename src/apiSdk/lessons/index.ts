import queryString from 'query-string';
import { LessonInterface, LessonGetQueryInterface } from 'interfaces/lesson';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLessons = async (query?: LessonGetQueryInterface): Promise<PaginatedInterface<LessonInterface>> => {
  return fetcher('/api/lessons', {}, query);
};

export const createLesson = async (lesson: LessonInterface) => {
  return fetcher('/api/lessons', { method: 'POST', body: JSON.stringify(lesson) });
};

export const updateLessonById = async (id: string, lesson: LessonInterface) => {
  return fetcher(`/api/lessons/${id}`, { method: 'PUT', body: JSON.stringify(lesson) });
};

export const getLessonById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/lessons/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLessonById = async (id: string) => {
  return fetcher(`/api/lessons/${id}`, { method: 'DELETE' });
};

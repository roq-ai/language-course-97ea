import queryString from 'query-string';
import { AssignmentInterface, AssignmentGetQueryInterface } from 'interfaces/assignment';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAssignments = async (
  query?: AssignmentGetQueryInterface,
): Promise<PaginatedInterface<AssignmentInterface>> => {
  return fetcher('/api/assignments', {}, query);
};

export const createAssignment = async (assignment: AssignmentInterface) => {
  return fetcher('/api/assignments', { method: 'POST', body: JSON.stringify(assignment) });
};

export const updateAssignmentById = async (id: string, assignment: AssignmentInterface) => {
  return fetcher(`/api/assignments/${id}`, { method: 'PUT', body: JSON.stringify(assignment) });
};

export const getAssignmentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/assignments/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAssignmentById = async (id: string) => {
  return fetcher(`/api/assignments/${id}`, { method: 'DELETE' });
};

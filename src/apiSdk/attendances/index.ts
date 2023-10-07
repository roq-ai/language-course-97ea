import queryString from 'query-string';
import { AttendanceInterface, AttendanceGetQueryInterface } from 'interfaces/attendance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttendances = async (
  query?: AttendanceGetQueryInterface,
): Promise<PaginatedInterface<AttendanceInterface>> => {
  return fetcher('/api/attendances', {}, query);
};

export const createAttendance = async (attendance: AttendanceInterface) => {
  return fetcher('/api/attendances', { method: 'POST', body: JSON.stringify(attendance) });
};

export const updateAttendanceById = async (id: string, attendance: AttendanceInterface) => {
  return fetcher(`/api/attendances/${id}`, { method: 'PUT', body: JSON.stringify(attendance) });
};

export const getAttendanceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/attendances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAttendanceById = async (id: string) => {
  return fetcher(`/api/attendances/${id}`, { method: 'DELETE' });
};

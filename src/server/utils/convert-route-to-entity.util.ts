const mapping: Record<string, string> = {
  assignments: 'assignment',
  attendances: 'attendance',
  companies: 'company',
  grades: 'grade',
  lessons: 'lesson',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

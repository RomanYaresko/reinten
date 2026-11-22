import { employees } from '@/data/employee';
import type { Employee, EmployeeData } from '@/features/employee/employee.types';
import type { Locale } from '@/i18n/routing';

function localizeEmployee(employee: EmployeeData, locale: Locale): Employee {
  return {
    ...employee,
    description: employee.description[locale],
  };
}

export async function getEmployees(locale: Locale): Promise<Employee[]> {
  return employees.map((employee) => localizeEmployee(employee, locale));
}

export async function getFounder(locale: Locale): Promise<Employee | undefined> {
  const founder = employees.find((employee) => employee.isFounder);

  return founder ? localizeEmployee(founder, locale) : undefined;
}

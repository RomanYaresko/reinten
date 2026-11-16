import { employees } from '@/data/employee';
import { Employee } from '@/features/employee/employee.types';

export async function getEmployees(): Promise<Employee[]> {
  return employees;
}

export async function getFounder(): Promise<Employee | undefined> {
  return employees.find((employee) => employee.isFounder);
}

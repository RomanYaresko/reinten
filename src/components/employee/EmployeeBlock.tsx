import Image from 'next/image';
import { Employee } from '@/features/employee/employee.types';

type EmployeeBlockProps = Readonly<{
  employee: Employee;
}>;

export default function EmployeeBlock({ employee }: EmployeeBlockProps) {
  const name = `${employee.firstName} ${employee.lastName}`;

  return (
    <a href={employee.linkedInLink} className="flex items-center gap-6">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-dark-subtle">
        {employee.image && (
          <Image
            src={employee.image}
            alt={name}
            fill
            sizes="56px"
            className="object-cover"
            unoptimized
          />
        )}
      </div>
      <div className="flex align-start justify-center flex-col text-left text-[14px]/[1.55] text-light-tertiary">
        <span>{name}</span>
        <span>{employee.description}</span>
      </div>
    </a>
  );
}

import type { Metadata } from "next";
import { DepartmentPage } from "@/components/empowerment/DepartmentPage";
import { getEmpowermentDepartment } from "@/lib/content";

const dept = getEmpowermentDepartment("wealth-management")!;
export const metadata: Metadata = { title: dept.name, description: dept.summary };

export default function Page() {
  return <DepartmentPage slug="wealth-management" />;
}

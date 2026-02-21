import type { ReactNode } from "react";

export function DashboardCard({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border p-4">{children}</div>;
}

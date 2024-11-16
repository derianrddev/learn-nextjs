import { Metadata } from "next";
import { WidgetsGrid } from "../ui";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Management Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl">Dashboard</h1>
      <WidgetsGrid />
    </div>
  );
}
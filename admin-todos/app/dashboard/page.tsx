import { WidgetItem } from "@/components/widget-item";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Global Activities">
        <div className="mt-2 flex justify-center gap-4">
          <h3 className="text-3xl font-bold text-gray-700">$23,988</h3>
          <div className="flex items-end gap-1 text-green-500">
            <svg className="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor" />
            </svg>
            <span>2%</span>
          </div>
        </div>
        <span className="block text-center text-gray-500">Compared to last week $13,988</span>
      </WidgetItem>
    </div>
  );
}
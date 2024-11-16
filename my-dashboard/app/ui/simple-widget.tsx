import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Props {
  title: string;
  subtitle: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const SimpleWidget = ({ title, subtitle, label, icon, href }: Props) => {
  return (
    <div className="flex flex-col items-center w-64 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h1 className="text-lg">{label}</h1>
      {icon}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
      <p className="mb-3 font-normal text-gray-500">{subtitle}</p>
      <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        More
        <IoArrowForwardOutline className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
      </Link>
    </div>
  )
}
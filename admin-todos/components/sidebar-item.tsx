"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ path, icon, title }: Props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link 
        href={ path } 
        className={clsx(
          'relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400',
          {
            'text-white bg-gradient-to-r from-sky-600 to-cyan-400': pathname === path
          }
        )}
      >
        { icon }
        <span>{ title }</span>
      </Link>
    </li>
  )
}

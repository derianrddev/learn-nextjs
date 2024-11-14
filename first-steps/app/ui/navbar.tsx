"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { path: '/about', name: 'About' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/contact', name: 'Contact' },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">Home</Link>
      <div className="flex flex-1"></div>
      {
        links.map( link => (
          <Link 
            key={ link.path }
            href={ link.path }
            className={clsx(
              'hover:underline hover:text-blue-400 mr-2 transition-all',
              {
                'text-blue-500': pathname === link.path,
              },
            )}
          >
            { link.name }
          </Link>
        ))
      }
    </nav>
  )
}

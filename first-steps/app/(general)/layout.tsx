import { NavBar } from '../ui';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center p-24">
        { children }
      </main>
    </>
  );
}
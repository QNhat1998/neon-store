import MainNav from '@/components/main-nav';
import Menu from '@/components/menu';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    title: 'Orders',
    href: '/user/orders',
  },
  {
    title: 'Profile',
    href: '/user/profile',
  },
];

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col border-b ">
        <div className="mx-auto w-full">
          <div className="flex items-center h-16 px-4">
            <Link href="/" className="w-22">
              <Image
                src="/logo.svg"
                height={48}
                width={48}
                alt={APP_NAME as string}
              />
            </Link>
            <MainNav className="mx-6" links={links} />
            <div className="ml-auto items-center flex space-x-4">
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6 conatiner mx-auto">
        {children}
      </div>
    </>
  );
}

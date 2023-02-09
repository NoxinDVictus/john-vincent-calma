'use client'; // Error components must be Client components

import { headerConstants } from '@/shared/constants/constant';
import { LOGO } from '@/shared/media.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import Logo from '../logo';

export default function Header(): JSX.Element {
  const [isTop, setIsTop] = useState(true);

  // * SOURCE: https://stackoverflow.com/questions/68087971/get-scrollbar-position-with-nextjs
  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY === 0);

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={clsx('header-container h-70 w-full fixed', isTop ? 'bg-transparent' : 'bg-white-100')}>
      <div className={clsx('flex items-center h-full py-2-p justify-between')}>
        <Logo isWhite={!isTop} dimension={40} />

        <div className="links">
          {headerConstants.map((e) => (
            <Link href={e.path} key={uuid()} className={clsx(isTop ? 'text-white-100' : 'text-black-100')}>
              {e.name}
            </Link>
          ))}
        </div>

        <div className="transition cursor-pointer">
          <Image src={LOGO[isTop ? 'WHITE' : 'BLACK']} height={30} width={30} alt="flag of" />
        </div>
      </div>

      {/* NOTE after finishing the header > do the translation */}
    </header>
  );
}

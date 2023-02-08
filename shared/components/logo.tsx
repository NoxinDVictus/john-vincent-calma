import clsx from 'clsx';
import Image from 'next/image';
import { LOGO } from '../media.constant';

interface ILogo {
  /** height and width of th logo */
  dimension: number;
  /** Determines what logo to show */
  isWhite: boolean;
}

export default function Logo({ dimension, isWhite }: ILogo): JSX.Element {
  return (
    <div
      className={clsx('logo p-3 round-50-p center', isWhite ? 'logo--black bg-black-100' : 'logo--white bg-white-100')}
    >
      <Image src={LOGO[isWhite ? 'WHITE' : 'BLACK']} height={dimension} width={dimension} alt="star of david" />
    </div>
  );
}

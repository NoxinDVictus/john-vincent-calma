import Star from '@/shared/components/star';
import { random } from '@/shared/functions';
import '@/styles/index.scss';
import clsx from 'clsx';
import uuid from 'react-uuid';

export default function NotFound(): JSX.Element {
  let stars = new Array(500);
  stars = stars.fill(0).map(() => Math.floor(Math.random() * 10));

  // TODO add a floating astronaut

  return (
    <div className="not-found w-screen h-screen bg-black-100 relative">
      <div className="text-white-100">
        <div className="info absolute center w-full h-full">
          <p className="text-30 flex flex-col text-center">
            <span>Looks like you're lost.</span>
            <span>The page you are looking for is nowhere to be found</span>
          </p>
        </div>

        <div className="relative h-screen w-screen">
          {stars.map((e) => (
            <span
              className={clsx(
                'absolute center',
                `top-${random()}-p bottom-${random()}-p left-${random()}-p right-${random()}-p`,
                `blink-${random(10)}`,
                `w-${e} h-${e}`,
              )}
              key={uuid()}
            >
              <Star dimension={e} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

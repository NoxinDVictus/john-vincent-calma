import { IMAGES, LOGO } from '@/shared/media.constant';
import Image from 'next/image';

function GameCard(): JSX.Element {
  return (
    <div className="game-card">
      <FrontCard />

      <div className="container">
        <div className="card">
          <div className="front" />
          <FrontCard />
        </div>
      </div>
    </div>
  );
}

function FrontCard(): JSX.Element {
  return (
    <div className="back-card back">
      <div className="back-card__tittle-bar">
        <p>John Vincent Calma</p>
        <div className="icon center">
          <Image width={20} height={20} src={LOGO.VERCEL} alt="Card Image" className="round" />
        </div>
      </div>

      <div className="back-card__image">
        <Image width={230} height={230} src={IMAGES.ME} alt="My Profile Image" className="box-show" />
      </div>

      <div className="back-card__information">
        <div className="corners corners--top-left" />
        <div className="corners corners--top-right" />
        <div className="corners corners--bottom-left" />
        <div className="corners corners--bottom-right" />

        <q>When this card is drawn, it should be immediately sent to the graveyard, because this is useless</q>
      </div>
    </div>
  );
}

export default GameCard;

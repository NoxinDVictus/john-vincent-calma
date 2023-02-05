import { I } from '@/interfaces';

export default function Template({ children }: I.Layout): JSX.Element {
  return <div className="head-template">{children}</div>;
}

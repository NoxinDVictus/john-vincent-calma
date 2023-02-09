import { ReactNode } from 'react';

export namespace I {
  export interface Layout {
    children: ReactNode;
  }

  export interface HeaderConstant {
    name: string;
    path: string;
  }
}

import { FilePlus, Palette, ReceiptText } from 'lucide-react';
import { eRoutes } from '../enums';

export const sidebarConfig: Array<{
  id: number;
  title: string;
  path: eRoutes;
  Icon: React.ReactNode;
}> = [
  {
    id: 1,
    title: 'Faturat',
    Icon: <ReceiptText />,
    path: eRoutes.HOME,
  },
  {
    id: 2,
    title: 'Krijo nje fature',
    Icon: <FilePlus />,
    path: eRoutes.HOME,
  },
  {
    id: 3,
    title: 'Shto nje ngjyre',
    Icon: <Palette />,
    path: eRoutes.HOME,
  },
];

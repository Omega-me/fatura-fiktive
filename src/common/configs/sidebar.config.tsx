import { FilePlus, ReceiptText } from 'lucide-react';
import { eRoutes } from '../enums';

export const sidebarConfig: Array<{
  id: number;
  title: string;
  path: string;
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
    path: `${eRoutes.INVOICE}/new`,
  },
];

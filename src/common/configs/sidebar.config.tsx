import { Bolt, ChartPie, FilePlus, ReceiptText } from 'lucide-react';
import { eRoutes } from '../enums';

export const sidebarConfig: Array<{
  id: number;
  title: string;
  path: string;
  Icon: React.ReactNode;
}> = [
  {
    id: 1,
    title: 'Analizat',
    Icon: <ChartPie />,
    path: eRoutes.HOME,
  },
  {
    id: 2,
    title: 'Faturat',
    Icon: <ReceiptText />,
    path: eRoutes.INVOICE,
  },
  {
    id: 3,
    title: 'Krijo nje fature',
    Icon: <FilePlus />,
    path: eRoutes.INVOICE_NEW,
  },
  {
    id: 4,
    title: 'Konfigurime',
    Icon: <Bolt />,
    path: eRoutes.CONFIGUARTIONS,
  },
];

'use client';
import { AppSheet } from '@/components';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye, Trash2 } from 'lucide-react';

export type LineDto = {
  nr: number;
  emertimi: string;
  sasia: number;
  gjeresia: number;
  lartesia: number;
  cmimi: number;
  totali: number;
};

export const lineColumns: ColumnDef<LineDto>[] = [
  {
    accessorKey: 'nr',
    header: 'Nr',
    // id: 'Nr',
    // header: ({ table }) => (
    //   <Checkbox
    //     checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
    //     // aria-label="Select all"
    //   />
    // ),
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // <Checkbox checked={row.getIsSelected()} onCheckedChange={(value: any) => row.toggleSelected(!!value)} aria-label="Select row" />
      return <div className="capitalize">{row.getValue('nr')}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'emertimi',
    header: 'Emertimi',
    cell: ({ row }) => <div className="capitalize">{row.getValue('emertimi')}</div>,
  },
  {
    accessorKey: 'sasia',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Sasia
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('sasia')}</div>,
  },
  {
    accessorKey: 'gjeresia',
    header: () => <div className="text-right">Gjeresia</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('gjeresia'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'lartesia',
    header: () => <div className="text-right">Lartesia</div>,
    cell: ({ row }) => {
      const lartesia = parseFloat(row.getValue('lartesia'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(lartesia);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'cmimi',
    header: () => <div className="text-right">Cmimi</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('cmimi'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LEK',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'totali',
    header: () => <div className="text-right">Totali</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totali'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="w-fit flex justify-end items-center gap-1">
          <AppSheet
            icon={<Eye />}
            tootltip="Shiko rreshtin"
            content={
              <div>
                <pre>{JSON.stringify(row)}</pre>
              </div>
            }
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <Trash2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Fshi rreshtin</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    },
  },
];

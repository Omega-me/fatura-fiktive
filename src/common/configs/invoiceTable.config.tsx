'use client';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Copy, Eye, Trash2 } from 'lucide-react';

export type InvoiceDto = {
  nr: number;
  shitesi: string;
  bleresi: string;
  data: string;
  pershkrimi: string;
  totali: number;
};

export const invoiceColumns: ColumnDef<InvoiceDto>[] = [
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
    accessorKey: 'shitesi',
    header: 'Shitesi',
    cell: ({ row }) => <div className="capitalize">{row.getValue('shitesi')}</div>,
  },
  {
    accessorKey: 'bleresi',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Bleresi
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('bleresi')}</div>,
  },
  {
    accessorKey: 'data',
    header: () => <div className="text-right">Data</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('data'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'pershkrimi',
    header: () => <div className="text-right">Pershkrimi</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue('pershkrimi')}</div>;
    },
  },
  {
    accessorKey: 'totali',
    header: () => <div className="text-right">Totali</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totali'));

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LEK',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      console.log(row);
      return (
        <div className="w-fit flex justify-end items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <Eye />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Shiko faturen</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="h-8 w-8 p-0">
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Kopjo faturen</p>
            </TooltipContent>
          </Tooltip>
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

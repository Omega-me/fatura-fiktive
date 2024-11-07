'use client';
import { AppSheet } from '@/components';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye, Trash2 } from 'lucide-react';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const lineColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
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
      return <div className="capitalize">{row.getValue('id')}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));

      // Format the amount as a dollar amount
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

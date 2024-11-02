import React from 'react';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { SheetTrigger } from '../ui/sheet';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-7 right-7 z-50">
      <SheetTrigger>
        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-gray-900 text-gray-50 shadow-lg transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          <Eye />
        </Button>
      </SheetTrigger>
    </div>
  );
};

export default FloatingButton;

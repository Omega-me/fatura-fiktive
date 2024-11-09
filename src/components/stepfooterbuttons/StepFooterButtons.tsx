import React, { FC } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  prevBtnName?: string;
  nextBtnName?: string;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  onClickPrevBtn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickNextBtn?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StepFooterButtons: FC<Props> = (props) => {
  return (
    <div className="my-2 w-full flex justify-center items-center">
      <div className="flex justify-between items-center mt-5 w-full">
        {props.prevDisabled ? (
          <div />
        ) : (
          <Button onClick={props.onClickPrevBtn} variant="outline">
            <ChevronLeft className="h-4 w-4" />
            {props.prevBtnName}
          </Button>
        )}
        {props.nextDisabled ? (
          <div />
        ) : (
          <Button onClick={props.onClickNextBtn} variant="outline">
            {props.nextBtnName}
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepFooterButtons;

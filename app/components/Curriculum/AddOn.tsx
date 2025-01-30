import * as React from 'react';
import { AddOnProps } from './types';

export const AddOn: React.FC<AddOnProps> = ({ text, backgroundColor }) => {
  return (
    <div className={`flex items-center justify-center px-8 py-4 text-lg font-medium text-black ${backgroundColor} rounded-full`}>
      {text}
    </div>
  );
};

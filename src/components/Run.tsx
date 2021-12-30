import React, { FC, useCallback } from 'react';
import { IRun } from '../Runs';

const Run: FC<IRun> = ({ link, name, award, date }) => {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <tr
      className='text-sm cursor-pointer bg-sky-100 hover:bg-sky-200'
      onClick={handleClick}>
      <td className='pr-2 italic'>{date.toLocaleDateString()}</td>
      <td className='pr-2'>{name}</td>
      <td className='pr-2'>{award}</td>
    </tr>
  );
};

export default Run;

import React from 'react';
import { SingleSwatchCircle } from '../components';

function SwatchWrapper({ activeData, swatchData, handleSwatchClick }) {
  function handleSwatchClicked(item) {
    handleSwatchClick(item);
  }
  return (
    <div className='h-fit absolute z-20 w-full bottom-0 flex justify-center gap-8 mb-2 lg:w-fit lg:inset-y-[40%] lg:right-20 lg:flex-col'>
      {swatchData.map((data) => (
        <SingleSwatchCircle
          key={data.id}
          item={data}
          handleClick={handleSwatchClicked}
          activeId={activeData.id}
        />
      ))}
    </div>
  );
}

export default SwatchWrapper;

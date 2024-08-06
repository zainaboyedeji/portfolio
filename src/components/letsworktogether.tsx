import React from 'react';

const LetsWorkTogether = () => {
  const text = "Let's Work Together"
  const repeatedText = text.repeat(10); 

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="scrolling-text text-black text-6xl font-bold px-6 py-2">
        {repeatedText}
      </div>
    </div>
  );
};

export default LetsWorkTogether;

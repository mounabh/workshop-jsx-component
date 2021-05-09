import React from 'react';

const SuggestionVideos = () => {
  const urlList = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Modern Forms in React — Erik Rasmussen`,
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Engineering led design — Lauren Argenta`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
  ];
  return (
    <div className='col-md-5'>
      {urlList.map((el, key) => (
        <div className='row mt-1 ' key={key}>
          <div className='col-md-8'>
            <iframe
              title='react-summet'
              // width='120'
              src={el.src}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
          <div className='col-md-4 '>
            <h6>{el.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionVideos;

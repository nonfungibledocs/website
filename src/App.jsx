
import React from 'react';

function Page() {
  return (<>
  <header>&nbsp;</header>
  <main className='container'>
     <textarea
        name="bio"
        placeholder="Write a professional short bio..."
        aria-label="Professional short bio"
      >
      </textarea>
      <button className="contrast">create non fungible docs</button>
    </main></>);
}

export default Page;

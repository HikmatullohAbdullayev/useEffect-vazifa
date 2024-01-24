import React from 'react';

function SearchSection(props) {
    return (
        <section className='p-8 w-full'>
        <div className="border max-w-80 w-full flex items-center rounded-lg  bg-slate-50">
        <label htmlFor="search" className='ml-2 cursor-pointer' >Qidiruv:</label>
        <input type="text"  id="search" placeholder='Qidiruv' className='outline-transparent p-2 w-full rounded-lg m-1' />
        </div>
      </section>
    );
}

export default SearchSection;
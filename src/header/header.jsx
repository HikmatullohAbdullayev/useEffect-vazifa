import React from 'react';

function Header(props) {
    return (
        <header className='py-8 shadow ' >
        <div className="mx-auto container flex justify-between w-full ">
          <h1 className='font-semibold text-2xl '>Davlatlar</h1>
          <p className='font-medium text-xl'>Rasmlari ham bor</p>
        </div>
      </header>
    );
}

export default Header;
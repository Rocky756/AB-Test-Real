import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className='header'>
        <p className='title'>AB TEST REAL</p>
        <form action="#">
          <input type="text" className='search' />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="iconSearch bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </form>
        <img src="https://img.icons8.com/ios/452/user--v1.png" alt="Иконка юзера" className='userIcon' />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="arrowIcon bi bi-arrow-right-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </div>
    </header>
  );
};


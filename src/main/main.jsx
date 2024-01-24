import React from 'react';
import SearchSection from './search_Section/SearchSection';
import CardList from "./card_list/CardList"

function main(props) {
    return (
        <main className='mx-auto container max-w-[1200px] '>
      <SearchSection/>
      <CardList/>
     
    </main>
    );
}

export default main;
import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/constants";


function CardList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/all`)
      .then((res) => res.json())
      .then((country) => setData(country));
  }, []);
  return (
    <section className="grid grid-cols-3 gap-6  ">
      {data?.map((item) => {
        return<>
        <div key="2" className="p-2 bg-slate-200 m-3 cursor-pointer rounded-md" >
          <div className=" w-[300px] h-[200px] mt-3  mx-auto "><img className="w-full h-full" src={item.flags.png} alt={item.flags.alt} /></div>
          <h1 className="pl-6 pt-8 font-mono text-2xl font-semibold ">{item.name.common}</h1>
          <div className="pl-6 mt-8 mb-7 grid gap-1">
            <p className=" font-medium">Population: {item.population}</p>
            <p className=" font-medium">Region: {item.region}</p>
            <p className=" font-medium">Capital: {item.capital}</p>
          </div>
        </div>
        </>
      })}
    </section>
  );
}

export default CardList;

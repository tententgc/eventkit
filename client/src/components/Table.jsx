import React, { useState, useEffect } from "react";


function TableData() {
  const [data, getData] = useState([]);
  const URL = "https://acscamp.tententgc.com/api/leaderboard/info";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  return (
    <div className="overflow-x-auto relative">
      <h1 className="tex-xl my-3"> Team Leaderboard </h1>
    <table className="w-full self-center text-sm my-5 text-center text-gray-500 dark:text-gray-400">
      
        <thead className="text-xm  text-gray-700 uppercase bg-zinc-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Team name
                </th>
                <th scope="col" className="py-3 px-6">
                    Score
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
               <td className="py-4 px-6">
                   {item.score} 
                </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  );
}



export default TableData;

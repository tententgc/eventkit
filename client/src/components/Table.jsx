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
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg ">
      <h1 class="text-xl my-3">Team Leaderboard</h1>
      <table class="w-full place-content-center text-sm text-center text-gray-500 dark:text-gray-400 my-6">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Team name
            </th>
            <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {item.name}
              </th>
              <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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

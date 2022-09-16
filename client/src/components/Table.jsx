import React, { useState, useEffect } from "react";
import './tabledata.css';
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
    <div className="scoreboard">
      <h1>ACS LEADERBOARD</h1>
      <tbody>
        <tr>
          <th>User Id</th>
          <th>Id</th>

        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default TableData;

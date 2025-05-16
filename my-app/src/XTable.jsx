import React, { useState } from 'react';

const XTable = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateB - dateA !== 0) return dateB - dateA;
      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views - a.views !== 0) return b.views - a.views;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={idx}>
              <td>{entry.date}</td>
              <td>{entry.views}</td>
              <td>{entry.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;

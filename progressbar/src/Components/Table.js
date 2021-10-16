import React, { Component } from "react"
import './Progressbar.css'
import ReactDOM from 'react-dom'

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%'
}

const tdStyle = {
    border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
    border: '1px solid #3498DB',
    background: '#3498DB',
    color: 'white',
    padding: '5px'
};

const Table = () => {
    const students = [
        { id: 1, name: 'Bob',  age: 25, favFruit: '🍏' },
        { id: 2, name: 'Adam', age: 43, favFruit: '🍌' },
        { id: 3, name: 'Mark', age: 16, favFruit: '🍊' },
        { id: 4, name: 'John', age: 29, favFruit: '🍒' }
    ];

          return (
            <div>
              <table style={tableStyle}>
                <tbody>
                  <tr>
                    <th style={thStyle}>Id</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Age</th>
                    <th style={thStyle}>Favourite Fruit</th>
                  </tr>
                  {students.map(({ id, name, age, favFruit }) => (
                    <tr key={id}>
                      <td style={tdStyle}>{id}</td>
                      <td style={tdStyle}>{name}</td>
                      <td style={tdStyle}>{age}</td>
                      <td style={tdStyle}>{favFruit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
       }
    


       export default Table;

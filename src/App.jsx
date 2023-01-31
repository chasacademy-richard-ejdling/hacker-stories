import "./App.css";
import * as React from 'react';
import Search from "./Search";
import List from "./List";

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const handeleSearch = event => {
  console.log(event.target.value)
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search id='Search' placeholder='Write Here' onSearch={handeleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
}

export default App;
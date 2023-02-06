import "./App.css";
import * as React from 'react';
import InputWithLabel from "./InputWithLabel";
import List from "./List";
import { useState } from "react";

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

function App() {  
  function useStorageState(key, initialState) {
    const [value, setValue] = useState(localStorage.getItem(key) || initialState)

    React.useEffect(() => localStorage.setItem(key, value), [value])

    return [value, setValue]
  }

  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')

  function handeleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel id='Search' label='Search: ' placeholder='Write Here' onSearch={handeleSearch} search={searchTerm}>Search: </InputWithLabel>
      <InputWithLabel id='Hello!' label='Hello! ' type='checkbox' placeholder='Write Here If You Want'>Child</InputWithLabel>
      <hr />
      <List list={stories.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))} />
    </div>
  );
}

export default App;
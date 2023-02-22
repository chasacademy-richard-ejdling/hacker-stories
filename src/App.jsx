import "./App.css";
import * as React from 'react';
import axios from "axios";
import InputWithLabel from "./InputWithLabel";
import SearchForm from "./SearchForm";
import List from "./List";
import { useState } from "react";

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

function storiesReducer(state, action) {
  switch (action.type) {
    case 'SEARCH_EMPTY':
      return { ...state, data: [], isLoading: false, isError: false };
    case 'STORIES_FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'STORIES_FETCH_SUCCESS':
      return { ...state, data: action.payload, isLoading: false, isError: false };
    case 'STORIES_FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true };
    case 'REMOVE_STORY':
      return { ...state, data: state.data.filter(story => story.objectID !== action.payload.objectID) };
    default:
      throw new Error();
  }
}

let showSearch = ''

function App() {
  const [stories, dispatchStories] = React.useReducer(storiesReducer, { data: [], isLoading: false, isError: false })
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')
  const [confirmedSearch, setConfirmedSearch] = useState(searchTerm)


  const handleFetchStories = React.useCallback(async () => {
    if (searchTerm === '') {
      dispatchStories({ type: 'SEARCH_EMPTY' })
      return;
    }

    dispatchStories({ type: 'STORIES_FETCH_INIT' })

    try {
      const result = await axios.get(API_ENDPOINT + confirmedSearch)

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      })
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
    }
  }, [confirmedSearch])

  React.useEffect(() => {
    handleFetchStories()
  }, [handleFetchStories])

  function useStorageState(key, initialState) {
    const [value, setValue] = useState(localStorage.getItem(key) || initialState)

    React.useEffect(() => localStorage.setItem(key, value), [value])

    return [value, setValue]
  }

  function handeleSearchInput(event) {
    setSearchTerm(event.target.value)
  }

  function handleRemoveStory(item) {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item
    })
  }

  function handleSearchSubmit(event) {
    setConfirmedSearch(searchTerm)

    event.preventDefault()
  }

  React.useEffect(() => {
    showSearch = `Searched for: "${confirmedSearch}"`
  }, [confirmedSearch])

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <SearchForm searchTerm={searchTerm} onSearchInput={handeleSearchInput} onSearchSubmit={handleSearchSubmit} />

      <p>{showSearch}</p>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={stories.data} remove={handleRemoveStory} />
      )
      }
    </div>
  );
}

export default App;
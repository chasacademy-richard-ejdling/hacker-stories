import InputWithLabel from "./InputWithLabel";

export default function SearchForm({ searchTerm, onSearchInput, onSearchSubmit }) {
    return (
      <form onSubmit={onSearchSubmit}>
        <InputWithLabel id='Search' placeholder='Write Here' onSearch={onSearchInput} search={searchTerm}>Search: </InputWithLabel>
        <button type='submit' disabled={!searchTerm}>Submit</button>
      </form>
    )
  }
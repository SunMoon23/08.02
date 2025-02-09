import 'react'

function Search( setValue ) {
  return (
    <input 
    type='search' 
    onChange={(e) => setValue(e.target.value.trim().toLocaleLowerCase())} />
  )
}

export default Search
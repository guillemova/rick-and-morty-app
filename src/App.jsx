
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components.jsx/LocationInfo'
import ResidentCard from './components.jsx/ResidentCard'
import ErrorFetch from './components.jsx/ErrorFetch'

function App() {
  
  const [location, setLocation] = useState()
  const [inputLocation, setInputLocation] = useState()
  const [hasError, setHasError] = useState(true)
  
  useEffect( () => {

    let URL 

    if(inputLocation){
      URL = `https://rickandmortyapi.com/api/location/${inputLocation}`
    } else {
      //Las ubicaciones van del 1 al 126
      const randomIdLocation = Math.floor(Math.random() * 126 ) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
      
    }
    // Peticion asincronica 
    axios.get(URL)
    .then(res => {
      setLocation(res.data)
        setHasError(false)})
    .catch(err => {console.log(err)
      setHasError(true)})
  }, [inputLocation])


 const handleSubmit = e => {
   e.prevetDefault()
   setInputLocation(e.target.inputSearch.value)
 }
 console.log(inputLocation)


  return (
    <div className="App">
       <h1 className='principal__title'>Rick and Morty App</h1>
       <form className='principal__form' onSubmit={handleSubmit}>
        <input  id="inputSearch" type="text" />
        <button className='form__button'>Search</button>
       </form>
       {
       hasError ? 
       <ErrorFetch />
       :
      <>
       <LocationInfo location={location}/>
       <div className='resident__container'>
         {
           location?.residents.map(url => (
             <ResidentCard key={url} url={url} />
             ))
            }
       </div>
      </>
     }
    </div>
  )
}

export default App

// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState(0)

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
        console.log(data.message)
      }
    )
  }, [])

  return (
    <>
      <BreedsSelect breeds={breeds} selectBreed={setSelectedBreed} selectedBreed={selectedBreed}/>
    </>
  )
}

export default DogListContainer

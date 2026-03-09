// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher")
  const [dogUrls, setDogUrls] = useState([])

  // 関数のレンダリング後に実行
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
      <button onClick={e => 
        fetch("https://dog.ceo/api/breed/" + selectedBreed + "/images/random/10")
          .then(response => response.json())
          .then(data => {
              console.log(data.message)
              setDogUrls(data.message)
            })
        }>表示</button>

      <div>
        {dogUrls.map( elem => (
          <img src={elem} className="img"/>
        ))}
      </div>
    </>
  ) 
}

export default DogListContainer

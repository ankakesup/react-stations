// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  return (
    <>
      <header>
        <title>React Test</title>
      </header>

      <body>
        <p>犬の画像を表示するサイトです。</p>

        <img src={dogUrl} />

        <button onClick={e => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")}>更新</button>

      </body>
    </>
  )
}
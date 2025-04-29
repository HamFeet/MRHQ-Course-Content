import { useState } from 'react'
import catSrc from '../assets/cat-public.png'
import dogSrc from '../assets/dog-public.jpg'


export default function Exercise2() {

    const [showCat, setShowCat] = useState(false)
    const [showDog, setShowDog] = useState(false)
  
  return (
    <div>
      <button onClick={() => {setShowCat(!showCat)}}>Cat</button>
      <button onClick={() => {setShowDog(!showDog)}}>Dog</button>
      {showCat && <img src={catSrc} alt="picture of a cat"/>}
      {showDog && <img src={dogSrc} alt="picture of a dog"/>}
    </div>
  )
}

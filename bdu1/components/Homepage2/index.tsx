import Image from 'next/image'
import React from 'react'
import BduItem from '../BduItem'

const Homepage2 = () => {
  return (
    <div>
        <div className=' mt-14 flex justify-center'>
            <Image src={"/bdu4.png"} alt='bdu4' width={1140} height={280} />
        </div>

<div>
  <BduItem/>
</div>
      
    </div>
  )
}

export default Homepage2
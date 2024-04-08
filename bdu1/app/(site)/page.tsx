import Carousel from '@/components/Carousel'
import Homepage from '@/components/Homepage'
import Homepage2 from '@/components/Homepage2'
import Navmenu from '@/components/Navmenu'
import React from 'react'

const page = () => {
  return (
    <div>
      <Homepage/>
      <Navmenu/>
      <Carousel/>
      <Homepage2/>
    </div>
  )
}

export default page
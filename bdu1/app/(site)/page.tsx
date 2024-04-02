import Carousel from '@/components/Carousel'
import Homepage from '@/components/Homepage'
import Navmenu from '@/components/Navmenu'
import React from 'react'

const page = () => {
  return (
    <div>
      <Homepage/>
      <Navmenu/>
      <Carousel/>
    </div>
  )
}

export default page
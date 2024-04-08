import Image from 'next/image'
import React from 'react'

const BduItem = () => {
  return (
 <div>
       <div className='mt-20 flex gap-8 justify-center'>
    <div>
    <Image  src={"/bdumuh.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[26ch]'>BDU-da elmi seminar: “Kristallar, kvazikristallar və tətbiqi xalq sənəti”</h5>
    </div>

    <div>
    <Image src={"/bdu6.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[26ch]'>BDU tələbələri arasında “Yaşıl dünyamızı qoruyaq” adlı rəsm müsabiqəsi elan edilir</h5>
    </div>
    <div>
    <Image src={"/bdu7.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[25ch]'>BDU tələbəsi Belqradda Qış Hüquq Məktəbində iştirak edib</h5>
    </div>
    <div>
    <Image src={"/bdu8.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[27ch]'>BDU-nun SABAH qruplarının tələbələri “Gənc Avropa səfiri” seçiliblər</h5>
    </div>

  </div>


  <div className='mt-20 flex gap-8 justify-center'>
    <div>
    <Image  src={"/bdu9.jpg"} alt='bdu4' width={240} height={80} />
<h5 className='w-[26ch]'>BDU-nun kafedra müdiri, akademik Vasif Babazadəyə “Heydər Əliyevin 100 illiyi (1923-2023)” yubiley medalı təqdim edilib</h5>
    </div>

    <div>
    <Image src={"/bdu10.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[26ch]'>BDU tələbələri Bakı Zooloji Parkında elmi seminar keçiriblər</h5>
    </div>
    <div>
    <Image src={"/bdu11.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[25ch]'>BDU tələbələri arasında süni intellekt müsabiqəsi elan edilir: “100 il sonra BDU”</h5>
    </div>
    <div>
    <Image src={"/bdu12.png"} alt='bdu4' width={240} height={80} />
<h5 className='w-[27ch]'>BDU-da professor Əsməd Muxtarovanın 80 illik yubileyi qeyd olunub</h5>
    </div>

  </div>

 </div>
  )
}

export default BduItem
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BduItem = () => {
  return (
 <div>
       <div className='mt-20 flex gap-4 justify-center'>
   <Link href={"http://bsu.edu.az/az/news/bduda_elmi_seminar_kristallar_kvazikristallar_v_ttbiqi_xalq_snti05042024113222"}>
      <div>
    <Image  src={"/bdumuh.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[26ch]'>BDU-da elmi seminar: “Kristallar, kvazikristallar və tətbiqi xalq sənəti”</h5>
    </div>
    </Link>

    <Link href={"http://bsu.edu.az/az/news/bdu_tlblri_arasnda_yal_dnyamz_qoruyaq_adl_rsm_msabiqsi_elan_edilir"}>
    <div>
    <Image src={"/bdu6.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[26ch]'>BDU tələbələri arasında “Yaşıl dünyamızı qoruyaq” adlı rəsm müsabiqəsi elan edilir</h5>
    </div>
   
    </Link>
    <Link href={"http://bsu.edu.az/az/news/bdu_tlbsi_belqradda_q_hquq_mktbind_itirak_edib"}>
    <div>
    <Image src={"/bdu7.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[25ch]'>BDU tələbəsi Belqradda Qış Hüquq Məktəbində iştirak edib</h5>
    </div>
   
    </Link>
    <Link href={"http://bsu.edu.az/az/news/bdunun_sabah_qruplarnn_tlblri_gnc_avropa_sfiri_seiliblr"}>
    
    <div>
    <Image src={"/bdu8.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[27ch]'>BDU-nun SABAH qruplarının tələbələri “Gənc Avropa səfiri” seçiliblər</h5>
    </div>
    </Link>

  </div>


  <div className='mt-20 flex gap-4 justify-center'>
<Link href={"http://bsu.edu.az/az/news/vasf"}>
    <div>
    <Image  src={"/bdu9.jpg"} alt='bdu4' width={270} height={80} />
<h5 className='w-[17rem]'>BDU-nun kafedra müdiri, akademik Vasif Babazadəyə “Heydər Əliyevin 100 illiyi (1923-2023)” yubiley medalı təqdim edilib</h5>
    </div>

</Link>
    <Link href={"http://bsu.edu.az/az/news/bdu_tlblri_bak_zooloji_parknda_elmi_seminar_keiriblr"}>
    <div>
    <Image src={"/bdu10.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[26ch]'>BDU tələbələri Bakı Zooloji Parkında elmi seminar keçiriblər</h5>
    </div>
    
    </Link>
    <Link href={"http://bsu.edu.az/az/news/bdu_tlblri_arasnda_sni_intellekt_msabiqsi_elan_edilir_100_il_sonra_bdu"}>
    
    <div>
    <Image src={"/bdu11.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[25ch]'>BDU tələbələri arasında süni intellekt müsabiqəsi elan edilir: “100 il sonra BDU”</h5>
    </div>
    </Link>
<Link href={"http://bsu.edu.az/az/news/bduda_professor_smd_muxtarovann_80_illik_yubileyi_qeyd_olunub"}>
    <div>
    <Image src={"/bdu12.png"} alt='bdu4' width={270} height={80} />
<h5 className='w-[27ch]'>BDU-da professor Əsməd Muxtarovanın 80 illik yubileyi qeyd olunub</h5>
    </div>

</Link>
  </div>
<div>
    <h1 className='text-2xl font-bold flex justify-end mr-52 text-teal-600'>Xəbərlər arxivi</h1>
</div>

 </div>
  )
}

export default BduItem
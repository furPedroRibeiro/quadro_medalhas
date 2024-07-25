import { ItemListTop3 } from './components/ItemList'
import { ItemList } from './components/ItemList'

import Logo from './assets/paris2024.png'
import OlympicFlag from './assets/olympicLogo.png'
import GoldMedal from './assets/GoldMedal.png'
import SilverMedal from './assets/SilverMedal.png'
import BronzeMedal from './assets/bronzeMedal.png'

export function App() {
  return (
    <main className='flex flex-col items-center justify-center py-12 px-10 gap-10'>
      <h1 className='text-3xl font-bold font-paris2024 text-center'><span className='text-[#002654] [text-shadow:_1px_1px_1px_rgb(0_0_0)]'>Quadro de medalhas das olimpíadas</span> <span className='text-white [text-shadow:_2px_2px_2px_rgb(0_0_0)] px-1 py-1 rounded-md'>Paris</span> <span className='[text-shadow:_1px_1px_1px_rgb(0_0_0)] text-[#ED2939]'> 2024</span></h1>
      <img src={Logo} alt='Anéis olímpicos com chama acima e escrito "Paris 2024"' className='w-[120px] md:w-[200px] object-cover'/>
      <section aria-label='Quadro de medalhas' className='flex flex-col md:w-[700px] w-full sm:px-10 gap-1'>
        <div className='flex flex-row justify-between mb-2'>
          <p className='font-paris2024 font-semibold text-lg md:text-2xl flex items-center justify-center'> <img src={OlympicFlag} alt="" className='w-12 md:w-[60px] object-cover'/> Países</p>
          <div className='flex flex-row items-center justify-center gap-4 object-cover'>
            <img src={GoldMedal} alt="Medalha de ouro das olimpíadas" className='w-4 md:w-10'/>
            <img src={SilverMedal} alt="Medalha de prata das olimpíadas" className='w-4 md:w-10'/>
            <img src={BronzeMedal} alt="Medalha de bronze das olimpíadas" className='w-4 md:w-10'/>
            <p className='w-10 md:w-16 text-center font-semibold font-paris2024 text-lg md:text-2xl'>Total</p>
          </div>
        </div>
        <ItemListTop3
          position={1}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_us-flag.gif'
          country='Estados Unidos'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemListTop3>
        <ItemListTop3
          position={2}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_br-flag.gif'
          country='Brasil'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemListTop3>
        <ItemListTop3
          position={3}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_ch-flag.gif'
          country='China'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemListTop3>
        <ItemList
          position={4}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_fr-flag.gif'
          country='França'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemList>
        <ItemList
          position={5}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_uk-flag.gif'
          country='Reino Unido'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemList>
        <ItemList
          position={6}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_nl-flag.gif'
          country='Holanda'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemList>
        <ItemList
          position={7}
          flagOfCountry='https://www.worldometers.info/img/flags/small/tn_gm-flag.gif'
          country='Alemanha'
          gold={0}
          silver={0}
          bronze={0}
          total={0}
        >

        </ItemList>
      </section>
    </main>
  )
}
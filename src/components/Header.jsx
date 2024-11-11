import { useState } from 'react';
import sun from '../img/sun.svg'
import moon from '../img/moon.svg'

export const Header = (isDark) => {
    const [dark, setDark] = useState(isDark)


    function cambiarModo(){
        document.documentElement.classList.toggle('dark', event.target.checked);
        setDark(document.documentElement.classList.contains('dark'))
      }

    return (
        <div className="flex text-black dark:text-white max-w-[90%] mx-auto justify-between items-center mt-4">
            <h1 className='font-bold text-2xl '>devFinder</h1>
            <div className='flex gap-3 justify-center items-center'>
                <span>{dark ? 'Light' : 'Dark'}</span>
                <label className='relative cursor-pointer'>
                    <input type="checkbox" id='modeDark' className='absolute opacity-0 w-0 h-0' onClick={cambiarModo} />
                    <img src={dark ? sun : moon} alt="" className='w-full text-white' />
                </label>

            </div>
        </div>

    )
}
import search from '../img/search.svg'
import { useState } from 'react';

export const Search = ({obtenerData, errores}) => {
    
    const [usernameInput, setUsernameInput] = useState('');

    function handleClick() {
        if(usernameInput == "") return
        
        obtenerData(usernameInput);
    }
    return (
        <section className='flex text-white max-w-[90%] mx-auto justify-between items-center my-8 '>
            <label htmlFor="" className='bg-white dark:bg-principal shadow-xl w-full rounded-2xl flex  justify-between py-2 pl-4 pr-2 gap-3 items-center'>
                <img src={search} alt="" />
                <input id="user" type="text" 
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder='Search Github Username...' 
                    className='bg-white dark:bg-principal text-black flex-grow focus:outline-none min-w-32 dark:text-white' />
                <button className='px-6 py-4 bg-secundario rounded-2xl hover:bg-secundario/50' onClick={handleClick}>Search</button>
            </label>
            
        </section>
    )
}
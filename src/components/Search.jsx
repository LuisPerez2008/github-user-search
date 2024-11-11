import search from '../img/search.svg'

export const Search = () => {

    return (
        <section className='flex text-white max-w-[90%] mx-auto justify-between items-center my-8'>
            <label htmlFor="" className='bg-principal w-full rounded-2xl flex  justify-between py-2 pl-4 pr-2 gap-3 items-center'>
                <img src={search} alt="" />
                <input type="text" placeholder='Search Github Username...' className='bg-[#1F2A48] text-white flex-grow focus:outline-none min-w-32' />
                <button className='px-6 py-4 bg-secundario rounded-2xl'>Search</button>
            </label>
        </section>
    )
}
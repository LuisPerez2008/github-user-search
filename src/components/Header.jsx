import sun from '../img/sun.svg'

export const Header = () => {

    return (
        <div className="flex text-white max-w-[90%] mx-auto justify-between items-center">
            <h1 className='font-bold text-2xl'>devFinder</h1>
            <div className='flex gap-3 justify-center items-center'>
                <span>LIGHT</span>
                <img src={sun} alt="" />
            </div>
        </div>

    )
}
import sun from '../img/sun.svg';
import ubicacion from '../img/ubicacion.svg';
import twitter from '../img/twitter.svg';
import nose from '../img/nose.svg';
import link from '../img/link.svg';


export const CardPrinciapl = () => {

    return (
        <section className="  text-white max-w-[90%] bg-principal py-12 rounded-2xl mx-auto my-8">
            <div className='grid grid-cols-1 tablet:grid-cols-[1fr_3fr_1fr] gap-3 tablet:grid-rows-[auto_auto_auto] max-w-[90%] mx-auto'>
                <div className=" tablet:col-span-3 ">
                    <div className='grid grid-cols-[1fr_3.6fr] grid-rows-[auto_auto]  '>
                        <div className='tablet:row-span-2  ' ><img src={sun} alt="" className='w-[90px] tablet:w-[120px]  h-auto tablet:mt-2  ' /></div>
                        <div className='flex gap-8 items-center mb-3 '>

                            <div className='flex flex-col tablet:flex-row tablet:justify-between w-full '>
                                <div>
                                    <h1 className='text-2xl font-semibold '>The Octacat</h1>
                                    <span className='text-secundario tracking-wide'>@user</span>
                                </div>
                                <span>fecha 25 de jan 2024</span>
                            </div>
                        </div>
                        <p className=' col-span-2 tablet:col-span-1 tablet:col-start-2 self-start '>Lorem ipsum dolor sit amet . Sint optio consequatur provident alias. Ea expe.</p>
                    </div>


                </div>
                <div className="bg-fondo tablet:col-start-2 tablet:row-start-2 tablet:col-span-2 flex justify-around p-3 rounded-xl h-auto self-start ">
                    <div className='text-center tablet:text-start'>
                        <p>Repos</p>
                        <span className='font-bold text-xl'>8</span>
                    </div>
                    <div className='text-center tablet:text-start'>
                        <p>Follower</p>
                        <span className='font-bold text-xl'>8987</span>
                    </div>
                    <div className='text-center tablet:text-start'>
                        <p>Following</p>
                        <span className='font-bold text-xl'>8</span>
                    </div>
                </div>
                <div className=" tablet:col-start-2 tablet:row-start-3 tablet:col-span-2 h-auto self-start ">
                    <div className='grid  gap-3 mt-4 tablet:grid-cols-2 '>
                        <div className='flex gap-3'><img src={ubicacion} alt="" /><span>holiii</span></div>
                        <div className='flex gap-3'><img src={link} alt="" /><span>holiii</span></div>
                        <div className='flex gap-3'><img src={twitter} alt="" /><span>holiii</span></div>
                        <div className='flex gap-3'><img src={nose} alt="" /><span>holiii</span></div>
                    </div>


                </div>
            </div>
        </section>
    )
}
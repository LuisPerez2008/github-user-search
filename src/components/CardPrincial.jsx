
import ubicacion from '../img/ubicacion.svg';
import twitter from '../img/twitter.svg';
import nose from '../img/nose.svg';
import link from '../img/link.svg';



export const CardPrinciapl = ({datos}) => {

    const twiter = datos.twitter_username != null ? ( <a href={`https://x.com/${datos.twitter_username}` } target='_blank' >{datos.twitter_username}</a>)
    : "Not Available";

    const blog = datos.blog != "" ? (<a href={datos.blog} className='block tablet:max-w-[150px] tablet:overflow-hidden tablet:text-ellipsis tablet:whitespace-nowrap' target='_blank'>{datos.blog}</a>) : "Not Available";
    

    return (
        <section className="  text-black max-w-[90%] bg-white dark:bg-principal dark:text-white shadow-xl py-12 rounded-2xl mx-auto my-8">
            <div className='grid grid-cols-1 tablet:grid-cols-[1fr_3fr_1fr] gap-3 tablet:grid-rows-[auto_auto_auto] max-w-[90%] mx-auto'>
                <div className=" tablet:col-span-3 ">
                    <div className='grid grid-cols-[1fr_3.6fr] grid-rows-[auto_auto]  '>
                        <div className='tablet:row-span-2  ' ><img src={datos.avatar_url} alt="" className='w-[90px] tablet:w-[120px] rounded-full h-auto tablet:mt-2  ' /></div>
                        <div className='flex gap-8 items-center mb-3 '>

                            <div className='flex flex-col tablet:flex-row tablet:justify-between w-full '>
                                <div>
                                    <h1 className='text-xl tablet:text-2xl font-semibold '>{datos.name} </h1>
                                    <span className='text-secundario tracking-wider'>@{datos.login}</span>
                                </div>
                                <span>Joined {new Date(datos.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                        </div>
                        <p className=' col-span-2 tablet:col-span-1 tablet:col-start-2 self-start '>{datos.bio || "This profile has no bio"}</p>
                    </div>


                </div>
                <div className="bg-slate-200 dark:bg-fondo tablet:col-start-2 text-sm tablet:text-lg tablet:row-start-2 tablet:col-span-2 flex justify-around p-3 rounded-xl h-auto self-start ">
                    <div className='text-center  tablet:text-start'>
                        <p>Repos</p>
                        <span className='font-bold text-lg tablet:text-xl'>{datos.public_repos}</span>
                    </div>
                    <div className='text-center  tablet:text-start'>
                        <p>Follower</p>
                        <span className='font-bold text-lg tablet:text-xl'>{datos.followers}</span>
                    </div>
                    <div className='text-center tablet:text-start'>
                        <p>Following</p>
                        <span className='font-bold text-lg tablet:text-xl'>{datos.following}</span>
                    </div>
                </div>
                <div className=" tablet:col-start-2 tablet:row-start-3 tablet:col-span-2 h-auto self-start text-sm">
                    <div className='grid  gap-3 mt-4 tablet:grid-cols-2 '>
                        <div className='flex gap-3'><img src={ubicacion} alt="" />
                            <span className={datos.location ? '' : 'text-gray-500'}>
                                {datos.location || "Not Available "}
                            </span>
                        </div>
                        <div className='flex gap-3'>
                            <img src={link} alt="" />
                            <span className={datos.blog ? '' : 'text-gray-500'}>
                                {blog}
                            </span>
                        </div>
                        <div className='flex gap-3'>
                            <img src={twitter} alt="" />
                            <span className={datos.twitter_username ? '' : 'text-gray-500 desable'}>
                                {twiter}
                            </span>
                        
                        </div>
                        <div className='flex gap-3'><img src={nose} alt="" /><span className={datos.company ? '' : 'text-gray-500'}>{datos.company || "Not Available "}</span></div>
                    </div>


                </div>
            </div>
        </section>
    )
}
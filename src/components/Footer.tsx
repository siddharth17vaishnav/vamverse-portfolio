import { footerLinks } from '../data/FooterLinks';



const Footer = (): JSX.Element => {
    return (
        <div className=" w-full flex flex-col justify-center items-center mt-[50px]">
            <h3 className="text-4xl md:text-6xl font-extralight">Get <span className="font-bold">in Touch.</span></h3>
            <h5 className=" mt-2 md:mt-6 text-[16px] md:text-xl font-normal">So that we can talk more about...</h5>
            <div className='flex gap-4 my-4'>
                {footerLinks.map((item) => {
                    return (
                        <div className='cursor-pointer hover:bg-blue-400 rounded-full p-2' key={item.id}>
                            <a href={item.link} target='_blank'>
                                {item.icon}
                            </a>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Footer
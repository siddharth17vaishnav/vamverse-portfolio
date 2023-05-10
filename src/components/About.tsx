import cube from '../assets/cube.gif'
const About = (): JSX.Element => {
    return (
        <>
            <div className='flex'>
                <div>
                    <h5 className="text-[#40BA77] lg:text-3xl mt-[50px] font-semibold md:text-2xl sm:text-x font-semiboldl">
                        A BIT ABOUT US
                    </h5>
                    <p className='text-2xl text-justify md:max-w-[80%] mt-5'>Vamverse is stealth mode start-up,discovering the AR capabilities in retail and online shopping industry with deep learning based solutions. it is located in India's one of the fastest and cleanest city Surat</p>
                </div>
                <img src={cube} alt="gif" className='w-[350px] mx-auto hidden md:block' />
            </div>
        </>
    )
}

export default About
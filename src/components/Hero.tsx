import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Hero = (): JSX.Element => {
    return (
        <>
            <div id="home" className=" h-[90vh] flex flex-col justify-center mx-auto items-center">
                <h1 className="text-6xl mx-auto font-bold">We Make Reality</h1>
                <h3 className="mt-5 text-2xl lg:max-w-[52%] self-center [text-align-last:center] ">Join our hands to scale your business with the latest augment reality technologies.</h3>
            </div>
            <div className='w-full [text-align-last:center] mt-[-100px]'>
                <a href="#works">
                    <KeyboardArrowDownIcon fontSize='large' className='cursor-pointer animate-bounce' />
                </a>
            </div>
        </>
    )
}

export default Hero
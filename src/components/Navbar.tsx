import { useState } from "react"
import { Menu, Close } from '@mui/icons-material';

const NavLinks = ['HOME', 'WORK', 'ABOUT']

const Navbar = (): JSX.Element => {
    const [selected, setSelected] = useState('HOME')
    const [nav, setNav] = useState(false)

    const handleOnClick = () => {
        setNav(prev => !prev)
    }
    return (
        <div className="flex justify-between items-center">
            <img src="/assets/logo.png" alt="vamverse-logo" className={nav ? "hidden" : "w-[200px] "} />
            <div>
                <ul className="hidden md:flex gap-4">
                    {NavLinks.map(link => <li key={link} className={` ${link === selected && 'border-b-2 border-white '}  hover:border-b-2 hover:border-white cursor-pointer`} style={{ color: link === selected ? '#F3CD03' : '#FFFFFF' }} onClick={() => setSelected(link)}><a href={`/#${link.toLowerCase()}`}>{link}</a></li>)}
                </ul>
                <div onClick={handleOnClick} className="block md:hidden mr-4 z-[99]">
                    {nav ? <Close /> : <Menu />}
                </div>
                <ul
                    className={
                        nav
                            ? "z-[10] fixed left-0 top-0 w-[100%] h-full bg-black ease-in-out duration-500 overflow-hidden"
                            : "ease-in-out duration-500 fixed w-[100%] h-full top-0 left-[-100%]"
                    }
                >
                    <img src="/assets/logo.png" alt="vamverse-logo" className="w-[200px]" />
                    <div onClick={handleOnClick} className="absolute top-[20px] right-[20px]">
                        {<Close />}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 text-2xl">
                        {NavLinks.map(link => <li key={link} style={{ color: link === selected ? '#F3CD03' : '#FFFFFF' }} onClick={() => {
                            setSelected(link)
                            setNav(prev => !prev)
                        }}><a href={`/#${link.toLowerCase()}`}>{link}</a></li>)}
                    </div>
                </ul>
            </div >
        </div >
    )
}

export default Navbar
import { useState } from "react"

const NavLinks = ['HOME', 'WORK', 'ABOUT']

const Navbar = (): JSX.Element => {
    const [selected, setSelected] = useState('HOME')
    return (
        <div className="flex justify-between items-center">
            <img src="/assets/logo.png" alt="vamverse-logo" className="w-[200px] " />
            <div>
                <ul className="flex gap-4">
                    {NavLinks.map(link => <li key={link} className={` ${link === selected && 'border-b-2 border-white '}  hover:border-b-2 hover:border-white cursor-pointer`} style={{ color: link === selected ? '#F3CD03' : '#FFFFFF' }} onClick={() => setSelected(link)}><a href={`/#${link.toLowerCase()}`}>{link}</a></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
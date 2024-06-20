import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Navbar = () => {

    const socials = [
        {
            link: "https://www.linkedin.com/in/mahfoud-mehalli-955218267/",
            label: "LinkedIn",
            icon: SiLinkedin,
        },
        {
            link: "https://github.com/mahfoud-mehalli?tab=overview&from=2024-03-01&to=2024-03-04",
            label: "GitHub",
            icon: SiGithub,
        },
        {
            link: "https://www.instagram.com/mahfoudbem.tech/",
            label: "Instagram",
            icon: SiInstagram,
        },
    ]


    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>mahfoudbem 💻</h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.icon
                    return <Link href={social.link} key={index} aria-label={social.label}><Icon className='w-5 h-5 hover:scale-125 transition-all ' /></Link>
                })}
            </div>
        </nav>
    )
}

export default Navbar
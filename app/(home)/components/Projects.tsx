import React from 'react'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'
import { MovingBorder, MovingBorderBtn } from '@/components/ui/moving-border'

const Projects = () => {

    const projects = [
        {
            title: 'modern business website',
            tech: [SiReact, SiTailwindcss],
            description: '',
            cover: '/modern-business-website.png',
            demoLink: 'https://react-responsive-modern-business-webs.netlify.app',
            codeLink: 'https://github.com/mahfoud-mehalli/React-Responsive-Modern-Business-Website',
            background: 'bg-indigo-500',
        },
        {
            title: 'GDG Devfest Website',
            tech: [SiHtml5, SiCss3, SiJavascript],
            description: '',
            cover: '/devfest-gdg-constantine.png',
            demoLink: 'https://mahfoud-mehalli.github.io/DevFest-2023-Event-Website/',
            codeLink: 'https://github.com/mahfoud-mehalli/DevFest-2023-Event-Website',
            background: 'bg-green-500',
        },
        {
            title: 'Lux Restaurant',
            tech: [SiHtml5, SiCss3, SiJavascript],
            description: '',
            cover: '/lux-resaurant.png',
            demoLink: 'https://mahfoud-mehalli.github.io/Lux-Restaurant-not-respo/',
            codeLink: 'https://github.com/mahfoud-mehalli/Lux-Restaurant-not-respo',
            background: 'bg-green-500',
        },
        {
            title: 'NFT store',
            tech: [SiHtml5, SiCss3],
            description: '',
            cover: '/nft-store.png',
            demoLink: 'https://mahfoud-mehalli.github.io/NFT-store-not-respo/',
            codeLink: 'https://github.com/mahfoud-mehalli/NFT-store-not-respo',
            background: 'bg-indigo-500',
        },
    ]

    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text='Projects 🚀' className='flex flex-col items-center justify-center rotate-6' />
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => {
                    return (
                        <Link href={project.codeLink} key={index}>
                            <div className={cn("p-4 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover}>
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-3">
                                            <h1 className='text-2xl'>{project.title}</h1>
                                            <div className='flex items-center gap-5'>
                                                {project.tech?.map((Icon, index) => {
                                                    return (
                                                        <Icon className='h-8 w-8' key={index} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <Link href={project.demoLink} className='inline-block'>
                                            <MovingBorderBtn borderRadius='.5rem' className='py-2 px-4 font-semibold'>
                                                <p>💼 LIVE DEMO</p>
                                            </MovingBorderBtn>
                                        </Link>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
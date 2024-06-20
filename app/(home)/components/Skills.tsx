"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss3, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMui, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'

const Skills = () => {

    const skills = [
        // Frontend
        {
          title: "React.JS",
          Icon: SiReact,
        },
        {
          title: "JavaScript",
          Icon: SiJavascript,
        },
        {
          title: "Tailwind CSS",
          Icon: SiTailwindcss,
        },
        {
          title: "Material UI",
          Icon: SiMui,
        },
        {
          title: "Redux",
          Icon: SiRedux,
        },
        {
          title: "HTML5",
          Icon: SiHtml5,
        },
        {
          title: "CSS3",
          Icon: SiCss3,
        },
        // Backend and Database
        {
          title: "Node.JS",
          Icon: SiNodedotjs,
        },
        {
          title: "Express.JS",
          Icon: SiExpress,
        },
        {
          title: "MongoDB",
          Icon: SiMongodb,
        },
        // Tools and Software
        {
          title: "VS Code",
          Icon: SiVisualstudiocode,
        },
        {
          title: "Firebase",
          Icon: SiFirebase,
        },
        {
          title: "Git",
          Icon: SiGit,
        },
        {
          title: "GitHub",
          Icon: SiGithub,
        },
        {
          title: "Postman",
          Icon: SiPostman,
        },
      ];

    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 💪' className='flex flex-col items-center justify-center -rotate-6' />
            <HoverEffect items={skills} />
        </div>
    )
}

export default Skills
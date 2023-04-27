import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';

const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: html,
            name: 'HTML',
            style: 'shadow-gray-600 ',

        },
        {
            id: 2,
            src: css,
            name: 'CSS',
            style: 'shadow-gray-600 ',

        },
        {
            id: 3,
            src: javascript,
            name: 'JavaScript',
            style: 'shadow-gray-600 ',

        },
        {
            id: 4,
            src: nextjs,
            name: 'Next.JS',
            style: 'shadow-gray-600 ',

        },    {
            id: 5,
            src: node,
            name: 'Node',
            style: 'shadow-gray-600 ',

        },
        {
            id: 6,
            src: reactImage,
            name: 'React',
            style: 'shadow-gray-600 ',

        },
        {
            id: 7,
            src: tailwind,
            name: 'Tailwind',
            style: 'shadow-gray-600 ',

        },
        {
            id: 8,
            src: graphql,
            name: 'GraphQL',
            style: 'shadow-gray-600 ',

        },
        {
            id: 9,
            src: github,
            name: 'Github',
            style: 'shadow-gray-600 ',

        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-20">Experience</p>
                <p className="py-6">These are some technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'
            >

            {technologies.map(({ id, src, name, style }) => (

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src}  alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{name}</p>
                </div>
            )
        )}

            </div>

        </div>
    </div>
  )
}

export default Experience
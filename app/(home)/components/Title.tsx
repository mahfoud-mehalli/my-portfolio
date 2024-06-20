import React from 'react'

const Title = ({text, className}:{text: string, className?: string}) => {
    return (
        <div className={className}>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold group-hover:text-green-400'>
                    {text}
                </h1>
                <div className="w-40 h-1 bg-green-500"></div>
                <div className="w-40 h-1 bg-indigo-500 translate-x-2"></div>
            </div>
        </div>
    )
}

export default Title
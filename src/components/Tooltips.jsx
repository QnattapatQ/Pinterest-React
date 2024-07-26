import React from 'react'

const Tooltips = ({ textTips }) => {
    return (
        <div className='bg-black px-2 absolute -bottom-10 right-auto py-2 rounded-md opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible'>
            <p className='text-white text-xs text-nowrap'>{textTips}</p>
        </div>
    )
}

export default Tooltips
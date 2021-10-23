import React from 'react'

function Label({ title, theme}) {
    return (
        <div className={`label ${theme}`}>
            {title}
        </div>
    )
}

export default Label

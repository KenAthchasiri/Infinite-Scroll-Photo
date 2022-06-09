import React from 'react'

const PhotoComponent = (props) => {
    const {urls:{regular},alt_description} = props

    return (
        <div className='sigle-photo'>
            <img src={regular} alt={alt_description} />
        </div>
    )
}

export default PhotoComponent
import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'
export default function ImageComponent({src,alt,className,hash,width,height}) {
    const [imageLoaded,setImageLoaded] = useState(false)
    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    },[src])

    return (
        <>
            <Blurhash
                hash={hash}
                /* width={width}*/
                height={'500px'}
                className={!imageLoaded?'w-50 ':'d-none'}
                resolutionX={32}
                resolutionY={32}

                punch={1}
            />
            <img
                src={src}
                alt={alt}
                className={imageLoaded?className:'d-none'}
            />
        </>
    )
}
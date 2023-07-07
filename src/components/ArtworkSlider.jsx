import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

import { useWindowSize } from '../helpers/useWindowSize'

const ArtworkSlider = ({
    paintingImage,
    ogImage,
    title
}) => {
    const [isResizing, setIsResizing] = useState(false)
    const paintingRef = useRef()
    const handleRef = useRef()

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleResize);
            window.addEventListener('mouseup', handleResizeEnd);
        }
    
        return () => {
            window.removeEventListener('mousemove', handleResize);
            window.removeEventListener('mouseup', handleResizeEnd);
        }
    }, [isResizing, handleResize, handleResizeEnd]);

    const handleResize = useCallback((e) => {
        setPositioning(e.clientX);
    }, [setPositioning]);

    const setPositioning = useCallback((x) => {
        const { left, width } = paintingRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;

        if ((x >= left) && (x <= width + left - handleWidth)) {
            handleRef.current.style.left = `${(x - left) / width * 100}%`;
            paintingRef.current.style.clipPath =
                `inset(0 ${100 - (x - left) / width * 100}% 0 0)`;
        }
    }, []);

    const handleResizeEnd = useCallback(() => {
        setIsResizing(false);
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleResizeEnd);
    }, [handleResize]);

    useEffect(() => {
        const { left, width } = paintingRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;
      
        setPositioning((width / 2 + left) - (handleWidth / 2));
      }, [setPositioning]);

    return (
        <div className="artwork-slider-container">
            <div 
                ref={handleRef} 
                className="slider-handle"
                onMouseDown={() => setIsResizing(true)}    
            >
                <p>x</p>
            </div>
            
            <div ref={paintingRef} className="slider-image slider-painting">
                <Image
                    image={paintingImage}
                    alt={title}
                    draggable={false}
                />
            </div>
            <div className="slider-image">
                <Image
                    image={ogImage}
                    alt={`${title} orginal painting`}
                    draggable={false}
                />
            </div>
        </div>
    )
}

export default ArtworkSlider
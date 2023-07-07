import React, { useState, useEffect, useContext } from 'react'
import { ArtworkContext } from '../providers/ArtworkProvider'

import ArtworkSlider from '../components/ArtworkSlider'

import Image from 'next/image'

import { evenOdd } from '../helpers'

const ArtworkList = () => {
    const [artwork] = useContext(ArtworkContext)
    const [showSlider, setShowSlider] = useState([])

    useEffect(() => {
        setShowSlider([])
        artwork.filtered.map(() => {
            setShowSlider(showSlider => [...showSlider, false])
        })
    }, [artwork.filtered])

    return (
        <div className={artwork.navOpen ? "artwork-list-container artwork-list-container-open" : "artwork-list-container"}>
            {artwork.filtered.map((art, i) => {
                console.log(artwork)
                return (
                    <div className={evenOdd(i)} key={i}>
                        <Image
                            src={`${artwork.url}${art.slug}/${art.slug}_lg.jpg`}
                            alt="painting"
                            fill
                        />
                        {/* {showSlider[i] === false ? (
                            <Image
                                src={`${artwork.url}a-colorful-history/${artwork.slug}/${artwork.slug}_lg.jpg`}

                            />
                        ) : (
                            <ArtworkSlider
                                paintingImage={paintingImage}
                                ogImage={ogImage}
                                title={artwork.title}
                            />
                        )} */}
                        
                        <div className="art-info">
                            <h1>{art.title}</h1>
                            <div className="art-info-container">
                                <p>{art.wikiText}</p>
                                <div className="wiki-container">
                                    <h5>{art.wikiTitle} | {art.wikiAccessed}</h5>
                                    <a href={art.wikiLink}>{art.wikiLink}</a>
                                </div>
                                <div className="art-line" />
                                <h4>{art.medium}</h4>
                                <h4>{art.year} | {art.width} x {art.height}</h4>
                            </div>
                            
                            <div 
                                className="art-to-map-link" 
                                onClick={() => console.log("go to map")}
                                role="button"
                                tabIndex="0"
                            >
                                <svg viewBox="0 0 13 10" version="1.1" >
                                    <polygon points="11.3964466 4.75 0 4.75 0 5.25 11.3964466 5.25 6.6464466 10 7.3535534 10 12.3535534 5 7.3535534 0 6.6464466 0" />
                                </svg>
                                <p> view on map</p>
                            </div>
                            <div
                                className="artwork-links"
                            >
                                {artwork.sold ? (
                                    <div className="artwork-sold">
                                        <svg viewBox="0 0 30 30">
                                            <circle cx="15" cy="15" r="15"/>
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="artwork-price">
                                        <h2>{artwork.price}</h2>
                                    </div>
                                )}
                                <div onClick={() => {
                                    const newArray = [...showSlider]
                                    newArray.splice(i, 1, !newArray[i])
                                    setShowSlider([...newArray])
                                }}
                                >
                                    <p>slider</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            )}
        </div>
    )
}

export default ArtworkList
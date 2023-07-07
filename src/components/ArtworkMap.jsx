import React, { useState, useContext, useRef, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { ArtworkContext } from '../providers/ArtworkProvider'

import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";

import { randomColor } from '../helpers'

const ArtworkMap = () => {
    const [artwork, setArtwork] = useContext(ArtworkContext)
    const [viewport, setViewport] = useState({
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 11
    })
    const [size, setSize] = useState(20)

    // console.log(artwork.currentPainting)

    const superman = artwork => {
        setViewport({
            ...viewport,
            longitude: parseFloat(artwork.lng),
            latitude: parseFloat(artwork.lat),
            zoom: 13,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
            // transitionEasing: d3.easeCubic
        })
    }

    const markers = useMemo(() => artwork.filtered.map(art => {
        return (
            <Marker 
                key={art.id}
                longitude={parseFloat(art.lng)}
                latitude={parseFloat(art.lat)}
                anchor="bottom"
            >
                <div className="art-marker-container">
                    <svg 
                        style={{
                            fill: randomColor(),
                            transform: `translate(${-size / 2}px,${-size}px)`,
                            position: 'relative',
                            zIndex: 501
                        }}
                        width="15px" 
                        height="22px" 
                        viewBox="0 0 15 22"
                        onClick={() => {
                            if (art.slug === artwork.currentPainting) {
                                setArtwork(artwork => ({ ...artwork, currentPainting: '' }))
                            } else {
                                setArtwork(artwork => ({ ...artwork, currentPainting: art.slug }))
                            }
                        }}
                    >
                        <ellipse cx="7.5" cy="7.23214286" rx="1.60714286" ry="1.60714286" />
                        <path d="M7.5,21.8035714 L7.92857143,21.2142857 C8.22321429,20.8125 15,11.4642857 15,7.5 C15,3.375 11.625,0 7.5,0 C3.375,0 0,3.375 0,7.5 C0,11.4642857 6.77678571,20.8125 7.07142857,21.2142857 L7.5,21.8035714 Z M4.82142857,7.23214286 C4.82142857,5.75892857 6.02678571,4.55357143 7.5,4.55357143 C8.97321429,4.55357143 10.1785714,5.75892857 10.1785714,7.23214286 C10.1785714,8.70535714 8.97321429,9.91071429 7.5,9.91071429 C6.02678571,9.91071429 4.82142857,8.70535714 4.82142857,7.23214286 Z"/>
                    </svg>
                    {artwork.currentPainting === art.slug && (
                        <div className="art-on-map-container">
                            <Image
                                src={`${artwork.url}${art.slug}/${art.slug}_lg.jpg`}
                                width={150}
                                height={150}
                                alt={`${art.title} on the map`}
                            />
                        </div>
                    )}
                </div>
            </Marker>
        )
    }), [artwork.filtered, artwork.currentPainting])

    return (
        <>
            <ReactMapGL
                {...viewport}
                width="100%"
                height="100vh"
                style={{ position: "fixed" }}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
            >
                {markers}
            </ReactMapGL>
            <div className="artwork-map-nav-container">
                {artwork.filtered.map(art => {
                    return (
                        <div 
                            className="artwork-map-nav-art-container" 
                            key={art.id}
                            onClick={() => {
                                console.log(art.slug)
                                superman(art)
                                setArtwork(artwork => ({ ...artwork, currentPainting: art.slug, currentCity: art.city }))
                            }
                            }
                        >
                                <p
                                    
                                >{art.title}</p>
                                <Image
                                    src={`${artwork.url}${art.slug}/${art.slug}_lg.jpg`}
                                    width={200}
                                    height={200}
                                    alt="thumb painting"
                                />
                        </div>
                    )
                })}
            </div>
            {!artwork.viewMapOnboarding && (
                <div className="view-map-onboarding-container">
                    <p
                        onClick={() => setArtwork(artwork => ({ ...artwork, viewMapOnboarding: true }))}
                    >close</p>
                </div>
            )}
        </>
    )
}

export default ArtworkMap
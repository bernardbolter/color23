import { useState, createContext, useEffect } from 'react'
import paintings from '../data/color.json'

export const ArtworkContext = createContext()

const ArtworkProvider = ({ children }) => {
    const [artwork, setArtwork] = useState({
        original: [],
        filtered: [],
        checked: [],
        sorting: '',
        searchTerm: '',
        viewMapOnboarding: false,
        currentPainting: '',
        currentCity: 'San Francisco',
        navOpen: false,
        viewMap: false,
        viewContact: false,
        viewGates: false,
        url: "https://thefilterman.de/artwork/a-colorful-history/"
    })

    useEffect(() => {
        setArtwork(state => ({ ...state, original: paintings, filtered: paintings }))
    }, [paintings])

    return (
        <ArtworkContext.Provider
            value={[artwork, setArtwork]}
        >
            {children}
        </ArtworkContext.Provider>
    )
}

export default ArtworkProvider
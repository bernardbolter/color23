import React, { useContext } from 'react'
import Link from 'next/link'

import { ArtworkContext } from '../providers/ArtworkProvider'

const Nav = () => {
    const [artwork, setArtwork] = useContext(ArtworkContext)

    return (
        <div className="nav-container">
            <button 
                className={artwork.navOpen ? 'nav-button nav-button-open' : 'nav-button'}
                onClick={() => setArtwork(artwork => ({ ...artwork, navOpen: !artwork.navOpen }))}
                aria-label="Menu"
                aria-controls="navigation"
            >
                <span />
                <span />
                <span />
                <span />
            </button>
            <nav
                id="navigation"
                className={artwork.navOpen ? 'nav-menu nav-menu-open' : 'nav-menu'}
            >
            
            <div className="nav-links-cites-container">
                <div className="nav-links-container">
                    <Link
                        href="/about/"
                    >about</Link>
                    <Link
                        href="/prints/"
                    >prints</Link>
                    <p
                        onClick={() => setArtwork(artwork => ({ ...artwork, viewGates: true }))}
                    >die Tore der Wahrnehmung</p>
                    <p
                        onClick={() => setArtwork(artwork => ({ ...artwork, viewContact: true }))}
                    >b@acolorfulhistory.com</p>
                </div>

                <div className="nav-cities-container">
                    <p>filter artworks:</p>
                        <div className="check-cities">
                            <label htmlFor="sf" className="check-sf">
                                <span>San Francisco</span>
                                <input 
                                    type="checkbox" 
                                    id="sf" 
                                    value="sf" 
                                    checked={artwork.checked.includes('San Francisco')}
                                    onChange={() => {
                                        if (artwork.checked.includes('San Francisco')) {
                                            var removeChecked = artwork.checked.filter(c => c !== 'San Francisco')
                                            setArtwork(state => ({ ...state, checked: removeChecked}))
                                        } else {
                                            setArtwork(state => ({ ...state, checked: [...artwork.checked, 'San Francisco'] }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="check-cities">
                            <label htmlFor="berlin" className="check-berlin">
                                <span>Berlin</span>
                                <input
                                    type="checkbox"
                                    id="berlin"
                                    value="berlin"
                                    checked={artwork.checked.includes('Berlin')}
                                    onChange={() => {
                                        if (artwork.checked.includes('Berlin')) {
                                            var removeChecked = artwork.checked.filter(c => c !== 'Berlin')
                                            setArtwork(state => ({ ...state, checked: removeChecked}))
                                        } else {
                                            setArtwork(state => ({ ...state, checked: [...artwork.checked, 'Berlin'] }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="check-cities">
                            <label htmlFor="hamburg" className="check-hamburg">
                                <span>Hamburg</span>
                                <input
                                    type="checkbox"
                                    id="hamburg"
                                    value="hamburg"
                                    checked={artwork.checked.includes('Hamburg')}
                                    onChange={() => {
                                        if (artwork.checked.includes('Hamburg')) {
                                            var removeChecked = artwork.checked.filter(c => c !== 'Hamburg')
                                            setArtwork(state => ({ ...state, checked: removeChecked}))
                                        } else {
                                            setArtwork(state => ({ ...state, checked: [...artwork.checked, 'Hamburg'] }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="check-cities">
                            <label htmlFor="available" className="check-available">
                                <span>Available Paintings</span>
                                <input
                                    type="checkbox"
                                    id="available"
                                    value="available"
                                    checked={artwork.checked.includes('available')}
                                    onChange={() => {
                                        if (artwork.checked.includes('available')) {
                                            var removeChecked = artwork.checked.filter(c => c !== 'available')
                                            setArtwork(state => ({ ...state, checked: removeChecked}))
                                        } else {
                                            setArtwork(state => ({ ...state, checked: [...artwork.checked, 'available'] }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="nav-switch-fiter-container">
                    <div className="nav-switch">
                        <p>view by:</p>
                        <div
                            onClick={() => {
                                setArtwork(artwork => ({ ...artwork, viewMap: !artwork.viewMap }))
                                if (!artwork.viewMap) {
                                    setArtwork(artwork => ({ ...artwork, navOpen: false }))
                                }
                            }}
                            className="nav-switch-container"
                        >
                            <p>MAP</p>
                            <svg className={artwork.viewMap ? 'switch-svg switch-svg-on' : 'switch-svg'} viewBox="0 0 36 20">
                                <circle id="switch-circle" cx="9.5" cy="9.5" r="5" />
                                <path id="switch-line" d="M9.07449777,0.501116071 L26.2918527,0.501116071 C26.3480324,0.501116071 26.463939,0.505293735 26.6308606,0.518186057 C26.9148788,0.540122424 27.23282,0.579790498 27.5759407,0.641626622 C28.5565666,0.81835188 29.5364966,1.13623162 30.4469139,1.62844911 C33.0333627,3.02681371 34.577567,5.53143769 34.577567,9.50111607 C34.577567,13.4687989 33.0085219,15.9729948 30.3784455,17.3721955 C29.4519985,17.8650653 28.4547544,18.1833856 27.4567803,18.3603597 C27.1075438,18.4222909 26.7839071,18.4620236 26.4947544,18.4839992 C26.3246933,18.4969238 26.2064902,18.5011161 26.1489955,18.5011161 L9.07741753,18.5011161 L9.07701793,18.5011162 C9.02016289,18.5012826 8.89427231,18.4969556 8.71995209,18.4840074 C8.42518056,18.4621123 8.09566273,18.4224654 7.74036719,18.3606369 C6.72670741,18.1842398 5.71410928,17.8666982 4.77343045,17.3749111 C2.09992945,15.9772043 0.506138393,13.4739719 0.506138393,9.50613839 C0.506138393,5.53813138 2.09957729,3.03288127 4.77241424,1.63211108 C5.71453343,1.13836885 6.72869185,0.819471085 7.74360961,0.642173011 C8.09881513,0.580121427 8.42800967,0.540308422 8.72217124,0.518285126 C8.8952913,0.505323969 9.01572888,0.501116071 9.07449777,0.501116071 Z" />
                            </svg>
                            <p>LIST</p>
                        </div>
                        <div className="nav-search">
                            <div className='search-glass'>
                                <svg className="svg-glass"  viewBox="0 0 20 20" >
                                    <path d="M13.0810294,13.8715917 C13.0090921,13.7996544 12.8859602,13.7952038 12.8052105,13.8617339 C12.8052105,13.8617339 12.6636504,13.9814759 12.5137058,14.0937992 C11.2071033,15.0725743 9.58434107,15.6523364 7.82616818,15.6523364 C3.50389484,15.6523364 0,12.1484415 0,7.82616818 C0,3.50389484 3.50389484,0 7.82616818,0 C12.1484415,0 15.6523364,3.50389484 15.6523364,7.82616818 C15.6523364,9.60254334 15.0605077,11.2406895 14.0632715,12.5541856 C13.9602207,12.6899174 13.8573619,12.8110331 13.8573619,12.8110331 C13.7932835,12.8882106 13.7970834,13.006521 13.8715917,13.0810294 L15.0788454,14.2882831 C15.1507828,14.3602204 15.2708622,14.3567745 15.3429237,14.284713 L15.4705566,14.1570801 C15.5444656,14.0831711 15.6609245,14.0797998 15.7333989,14.1522742 L19.9474586,18.3663339 C20.0187134,18.4375887 20.0164256,18.5554033 19.9470867,18.6247421 L18.6247421,19.9470867 C18.553282,20.0185469 18.4388083,20.019933 18.3663339,19.9474586 L14.1522742,15.7333989 C14.0810194,15.6621441 14.0850187,15.542618 14.1570801,15.4705566 L14.284713,15.3429237 C14.358622,15.2690147 14.3627915,15.1533538 14.2882831,15.0788454 L13.0810294,13.8715917 Z M7.82616818,14.5343123 C11.5309739,14.5343123 14.5343123,11.5309739 14.5343123,7.82616818 C14.5343123,4.12136246 11.5309739,1.11802403 7.82616818,1.11802403 C4.12136246,1.11802403 1.11802403,4.12136246 1.11802403,7.82616818 C1.11802403,11.5309739 4.12136246,14.5343123 7.82616818,14.5343123 Z" />
                                </svg>
                            </div>
                            <input 
                                className='search-filter' 
                                placeholder='search by title and year...' 
                                type='text' 
                                value={artwork.searchTerm} onChange={e => setArtwork(state => ({ ...state, searchTerm :e.target.value }))} 
                            />
                            <div 
                                onClick={() => setArtwork(state => ({ ...state, searchTerm: '' }))} 
                                className={(artwork.searchTerm.length !== 0) ? 'close-filter close-filter-on' : 'close-filter'}
                            >
                                <svg className="svg-close" viewBox="0 0 20 20" >
                                    <polygon points="13.8095238 5.52380952 10 9.33333333 6.19047619 5.52380952 5.52380952 6.19047619 9.33333333 10 5.52380952 13.8095238 6.19047619 14.4761905 10 10.6666667 13.8095238 14.4761905 14.4761905 13.8095238 10.6666667 10 14.4761905 6.19047619" />
                                    <path d="M10,0 C4.47619048,0 0,4.47619048 0,10 C0,15.5238095 4.47619048,20 10,20 C15.5238095,20 20,15.5238095 20,10 C20,4.47619048 15.5238095,0 10,0 Z M10,19.047619 C5,19.047619 0.952380952,15 0.952380952,10 C0.952380952,5 5,0.952380952 10,0.952380952 C15,0.952380952 19.047619,5 19.047619,10 C19.047619,15 15,19.047619 10,19.047619 Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="nav-sort-container">
                        <p>sort by:</p>
                        <div className="nav-radios nav-random">
                            <label htmlFor="random" className="sort-label check-random">
                                <span>random</span>
                                <input 
                                    type="checkbox" 
                                    id="random" 
                                    value="random"
                                    checked={artwork.sorting === 'random'}
                                    onChange={() => {
                                        if (artwork.sorting === 'random') {
                                            setArtwork(state => ({ ...state, sorting: '' }))
                                        } else {
                                            setArtwork(state => ({ ...state, sorting: 'random' }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="nav-radios nav-older">
                            <label htmlFor="og" className="sort-label check-older">
                                <span>og</span>
                                <input 
                                    type="checkbox" 
                                    id="og" 
                                    value="og"
                                    checked={artwork.sorting === 'og'}
                                    onChange={() => {
                                        if (artwork.sorting === 'og') {
                                            setArtwork(state => ({ ...state, sorting: '' }))
                                        } else {
                                            setArtwork(state => ({ ...state, sorting: 'og' }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="nav-radios nav-latest">
                            <label htmlFor="latest" className="sort-label check-latest">
                                <span>latest</span>
                                <input 
                                    type="checkbox" 
                                    id="latest" 
                                    value="latest"
                                    checked={artwork.sorting === 'latest'}
                                    onChange={() => {
                                        if (artwork.sorting === 'latest') {
                                            setArtwork(state => ({ ...state, sorting: '' }))
                                        } else {
                                            setArtwork(state => ({ ...state, sorting: 'latest' }))
                                        }
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <p className="search-message">{artwork.filtered.length === 0 && 'no results for your search'}</p>
            </nav>
        </div>
    )
}

export default Nav
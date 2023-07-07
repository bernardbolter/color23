export const evenOdd = (i) => {
    if (i % 2 === 0) {
        return 'art art-odd'
    } else {
        return 'art art-even'
    }
}

export const shuffle = (array) => {
    console.log(array)
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    console.log(array)

    return array
}

export const randomColor = () => {
    const colorArray = [
        '#A41E22',
        '#F09120',
        '#E1B324',
        '#869F66',
        '#4DA446',
        '#1D9F97',
        '#3482AD',
        '#3B5BA9',
        '#674D8C',
        '#393A3A'
    ]

    const theColor = colorArray[Math.floor(Math.random() * colorArray.length)]

    return theColor
}
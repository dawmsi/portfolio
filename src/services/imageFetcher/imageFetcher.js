export const imageFetcher = async (url, setFunc, setLoading) => {
    const modUrl = url.replace(':', '%3A').replaceAll('/', '%2F')
    let imageUrl = `https://url-to-screenshot.p.rapidapi.com/get?url=${modUrl}&height=720&allocated_time=3&width=1024&base64=0`

    const options = {
        method: 'GET',
        headers: {
            Accept: 'image/png',
            'X-RapidAPI-Key':
                'd92c875c5cmshf3700a6205431e6p13c524jsnce934345b550',
            'X-RapidAPI-Host': 'url-to-screenshot.p.rapidapi.com'
        }
    }

    const res = await fetch(imageUrl, options)
    if (res.status >= 400) {
        setFunc(undefined)
    } else if (res.status === 200) {
        const imageBlob = await res.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob)
        setFunc(imageObjectURL)
        setLoading(false)
    } else {
        setFunc(res.status)
    }
}

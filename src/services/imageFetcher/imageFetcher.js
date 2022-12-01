export const imageFetcher = async (url, setFunc, setLoading) => {
    const key = 'a9c4da9f5b0b90ecc9c1b1f56ecec1b5'
    let imageUrl = `https://api.screenshotlayer.com/api/capture?access_key=${key}&url=${url}/&viewport=1200x720&width=720`
    fetch(imageUrl, {
        method: 'GET',
        mode: 'no-cors',
        headers: {}
    }).then((res) => {
        if (res.status >= 400) {
            return res.url
        }
        setFunc(imageUrl)
        setLoading(false)
        return true
    })
}

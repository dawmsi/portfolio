export const imageFetcher = async (url, setFunc) => {
    const key = 'b374b20c9a67d2a7ec4a59b0e56ba336'
    let imageUrl = `https://api.screenshotlayer.com/api/capture?access_key=${key}&url=${url}/&viewport=1200x720&width=720`
    fetch(imageUrl, {
        method: 'GET',
        mode: 'no-cors',
        headers: {}
    }).then((res) => {
        if (res.status >= 400) {
            return ''
        }
        setFunc(imageUrl)
    })
}

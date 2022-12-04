export const imageFetcher = async (url, setFunc, setLoading) => {
    const key = 'b15c1068488d6e70e7255f7b5741f866'
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

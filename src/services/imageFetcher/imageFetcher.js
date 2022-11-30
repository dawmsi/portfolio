export const imageFetcher = async (url, setFunc) => {
    const key = '446ad08e84a3d905eb24e3191f238c4e'
    let imageUrl = `https://api.screenshotlayer.com/api/capture?access_key=${key}&url=${url}/&viewport=1200x720&width=720`
    fetch(imageUrl, {
        method: 'GET',
        mode: 'no-cors',
        headers: { 'Access-Control-Allow-Origin': '*' }
    }).then((res) => {
        if (res.status >= 400) {
            return res.url
        }
        setFunc(imageUrl)
        return true
    })
}

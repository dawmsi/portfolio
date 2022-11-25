export const imageFetcher = async (url, setFunc) => {
    let imageUrl = `https://api.screenshotlayer.com/api/capture?access_key=0d96b879a9b95d77e20da568bfa298bb&url=${url}/&viewport=1200x720&width=720`
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

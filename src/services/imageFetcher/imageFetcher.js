export const imageFetcher = async (url, setFunc) => {
    let imageUrl = `https://api.screenshotlayer.com/api/capture?access_key=491a50ffd7f445fb7ba6e976abd2b19c&url=${url}/&viewport=1200x720&width=720`
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

export const imageFetcher = async (url, setFunc) => {
    let imageUrl = `http://api.screenshotlayer.com/api/capture?access_key=7c7a5ce5547cd0584bc82574d583aec0&url=${url}/&viewport=1200x760&width=700`
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

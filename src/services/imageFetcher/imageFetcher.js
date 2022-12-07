export const imageFetcher = async (url, setFunc, setLoading) => {
    const key = 'acf086d345374e32b2af7b793018b841'
    let imageUrl = `https://screenshot.abstractapi.com/v1/?api_key=${key}&url=${url}&capture_full_page=false&width=1200&height=700`
    fetch(imageUrl).then((res) => {
        if (res.status >= 400) {
        } else if (res.status === 200) {
            setFunc(imageUrl)
            setLoading(false)
        } else {
            setFunc(undefined)
        }
    })
}

// https://shot.screenshotapi.net/screenshot?token=V3R3NAG-9ETMYR3-M069YRH-PT71PQW
// &url=https%3A%2F%2Fdawmsi.github.io%2Fblog-project%2F
// &width=1200&height=720&full_page=true&output=image&file_type=png&wait_for_event=load
// _

// https://shot.screenshotapi.net/screenshot?token=V3R3NAG-9ETMYR3-M069YRH-PT71PQW
// &url=https%3A%2F%2Fdawmsi.github.io%2Ftatoo-project%2F
// &width=1200&height=720&full_page=true&output=image&file_type=png&wait_for_event=load

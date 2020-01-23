const axios = require('axios')

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getItemData(id, locale) {
    const imageUrl = `https://us.api.blizzard.com/data/wow/media/item/${id}?namespace=static-classic-us&locale=${locale}&access_token=USW1JuSmtxIMDXEtvRVKVVmXkCk92vnp24`
    const statsUrl = `https://us.api.blizzard.com/data/wow/item/${id}?namespace=static-classic-us&locale=fr_FR&access_token=USW1JuSmtxIMDXEtvRVKVVmXkCk92vnp24`
    try {
        const stats = await axios.get(statsUrl)
        const image = await axios.get(imageUrl)
        console.log(stats.data)
    } catch (error) {
        console.error(error)
    }
}

getItemData(19019, 'fr_FR')

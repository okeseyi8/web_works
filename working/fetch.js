const API_URL = "http://business.playfm.al/api/nowplaying/4"
// const TEST_URL_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eff0244fb5c61bca673f398959812930&page=1"

showData(API_URL_1)

async function showData(url){
    const res = await fetch (url)
    const data = await res.json()
    console.log(data)

}
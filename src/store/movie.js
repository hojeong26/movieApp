import { Store } from "../core/heropy"

const store = new Store({
    searchText:'',
    page: 1,
    pageMax: 1,
    movies: [], //영화 정보의 내용으로 갱신됨
    movie: {}, //영화 상세 정보 저장
    loading: false,
    message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
    store.state.loading = true
    store.state.page = page
    if(page === 1){
        store.state.movies=[]
        store.state.message = ''
    }
    try{
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`)
        const { Search, totalResults, Response, Error } = await res.json()
        if(Response === 'True'){
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        }else{
            store.state.message = Error
        }
    }catch (error) {

    }finally{ //무조건 실행
        store.state.loading = false
    }
}

export const getMovieDetails = async id => {
    try{
        const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`)
        store.state.movie = await res.json()
    }catch (error){
        console.log('getMovieDetails error:',error)
    }
}
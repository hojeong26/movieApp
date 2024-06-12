import {createRouter} from '../core/heropy'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
    // 위에서부터 순서대로 찾음
    {path: '#/', component: Home},
    {path: '#/movie', component: Movie},
    {path: '#/about',component: About},
    {path: '.*', component:NotFound}
])
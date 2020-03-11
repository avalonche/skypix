import App from '../app'
import Search from '../components/Search'
import Details from '../components/Details'
import Video from '../components/VideoPlayerView'
import Genres from '../components/Genres'
import EpisodesPicker from '../components/EpisodesPicker'

const Routes = {
    Home: {
        screen: App, 
        navigationOptions: {
            header: false
          }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: false
          }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: false
        }
    },
    Genres: {
        screen: Genres, 
        navigationOptions: {
            header: false
        }
    },
    Video: {
        screen: Video,
        navigationOptions: {
            header: false
        }
    },
    EpisodesPicker: {
        screen: EpisodesPicker,
        navigationOptions: {
            header: false
        }
    }
}

export default Routes
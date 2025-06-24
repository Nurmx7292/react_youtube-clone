import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { VideoPlayerSection } from './components/VideoPlayerSection/VideoPlayerSection'
import { VideosSection } from './components/VideosSection/VideosSection'

function App() {

  return (
    <>
      <div className="app">
        <Header/>
         <Main>
            <VideoPlayerSection/>
            <VideosSection/>
         </Main>
      </div>
      
    </>
  )
}

export default App

import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'
import { VideosSection } from './components/VideosSection/VideosSection'

function App() {

  return (
    <>
      <div className="app">
        <Header/>
         <Main>
            <VideoPlayer/>
            <VideosSection/>
         </Main>
      </div>
      
    </>
  )
}

export default App

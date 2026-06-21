import Header from './components/layout/Header'
import TransportControls from './components/layout/TransportControls'
import Playlist from './components/playlist/Playlist'
import VisualizerArea from './components/visualizers/VisualizerArea'

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-950 text-white overflow-hidden font-sans">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <VisualizerArea />
        <Playlist />
      </div>

      <TransportControls />
    </div>
  )
}

export default App

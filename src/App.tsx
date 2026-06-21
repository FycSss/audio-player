function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <header className="h-14 border-b border-gray-800 flex items-center px-4 bg-gray-900">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">WaveForge Player</h1>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content (Visualizer & Settings) */}
        <main className="flex-1 flex flex-col relative">
          <div className="flex-1 bg-black flex items-center justify-center border-r border-gray-800">
            <div className="text-gray-500 flex flex-col items-center gap-4">
              <span className="text-4xl">Visualizer Area</span>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-gray-800 rounded-full">Oscilloscope</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Spectrum</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Spectrogram</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Waveform</span>
              </div>
            </div>
          </div>
        </main>

        {/* Playlist Area */}
        <aside className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <h2 className="font-semibold text-lg">Playlist</h2>
          </div>
          <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
            <p>Drag and drop files here</p>
          </div>
        </aside>
      </div>

      {/* Transport Controls */}
      <footer className="h-24 bg-gray-900 border-t border-gray-800 flex items-center px-6">
        <div className="flex-1 flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
            {/* Cover art placeholder */}
            <span className="text-xs">Art</span>
          </div>
          <div>
            <div className="font-semibold">No Track Playing</div>
            <div className="text-xs text-gray-400">Unknown Artist</div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">⏮</button>
            <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">▶</button>
            <button className="text-gray-400 hover:text-white">⏭</button>
          </div>
          <div className="w-full max-w-md flex items-center gap-2 text-xs text-gray-400">
            <span>0:00</span>
            <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="w-0 h-full bg-blue-500"></div>
            </div>
            <span>0:00</span>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <span className="text-xs text-gray-400">Volume</span>
          <div className="w-24 h-1 bg-gray-800 rounded-full">
            <div className="w-3/4 h-full bg-blue-500"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

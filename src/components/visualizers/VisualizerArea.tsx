export default function VisualizerArea() {
  return (
    <main className="flex-1 flex flex-col relative">
      <div className="flex-1 bg-black flex items-center justify-center border-r border-gray-800">
        <div className="text-gray-500 flex flex-col items-center gap-6">
          <div className="w-64 h-32 flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <span className="text-2xl text-gray-600">Visualizer Area</span>
          </div>
          <div className="flex gap-4 text-sm">
            <button className="px-4 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full hover:bg-blue-600/30 transition-colors">Oscilloscope</button>
            <button className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Spectrum</button>
            <button className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Spectrogram</button>
            <button className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">Waveform</button>
          </div>
        </div>
      </div>
    </main>
  );
}

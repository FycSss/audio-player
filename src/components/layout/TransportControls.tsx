export default function TransportControls() {
  return (
    <footer className="h-24 bg-gray-900 border-t border-gray-800 flex items-center px-6">
      <div className="flex-1 flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
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
        <button className="text-gray-400 hover:text-white text-xs">EQ</button>
        <span className="text-xs text-gray-400">Volume</span>
        <div className="w-24 h-1 bg-gray-800 rounded-full cursor-pointer">
          <div className="w-3/4 h-full bg-blue-500 pointer-events-none"></div>
        </div>
      </div>
    </footer>
  );
}

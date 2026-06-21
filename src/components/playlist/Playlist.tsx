export default function Playlist() {
  return (
    <aside className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Playlist</h2>
        <button className="text-xs text-blue-400 hover:text-blue-300">+ Add</button>
      </div>
      <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-800 m-4 rounded-lg">
        <p>Drag and drop files</p>
        <p className="text-xs mt-2">MP3, WAV, FLAC</p>
      </div>
    </aside>
  );
}

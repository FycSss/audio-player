export default function Header() {
  return (
    <header className="h-14 border-b border-gray-800 flex items-center px-4 bg-gray-900">
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        WaveForge Player
      </h1>
      <div className="flex-1"></div>
      <div className="flex gap-2">
        <button className="text-gray-400 hover:text-white px-2">Settings</button>
        <button className="text-gray-400 hover:text-white px-2">Mini Player</button>
      </div>
    </header>
  );
}

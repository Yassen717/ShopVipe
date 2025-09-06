export default function Loading() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-500 mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">🛍️</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading ShopVibe...</h2>
        <p className="text-gray-600">Preparing your shopping experience</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}
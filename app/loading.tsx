export default function Loading() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load your content</p>
      </div>
    </div>
  );
}
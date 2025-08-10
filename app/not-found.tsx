import Link from 'next/link';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we could not find the page you are looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="w-full">
              Go Back Home
            </Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline" size="lg" className="w-full">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
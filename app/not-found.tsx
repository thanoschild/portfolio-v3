import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-theme-bg px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-theme-main">404</h1>
        <p className="text-xl mb-2 text-theme-text">Page Not Found</p>
        <p className="text-sm text-theme-text-sub mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group flex items-center justify-center gap-3 px-6 py-2 rounded-full transition hover:text-theme-main"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            <GoArrowLeft className="text-lg" />
          </span>
          Go Home
        </Link>
      </div>
    </main>
  );
}

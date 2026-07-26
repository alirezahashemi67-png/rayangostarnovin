export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#050816]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          رایان گستر نوین
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#">خانه</a>
          <a href="#">خدمات</a>
          <a href="#">نمونه کارها</a>
          <a href="#">درباره ما</a>
          <a href="#">تماس</a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700 transition">
          درخواست مشاوره
        </button>
      </div>
    </header>
  );
}
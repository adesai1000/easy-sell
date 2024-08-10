import Link from 'next/link';

export default function Header({ font }: { font?: string }) {
  return (
    <header className="py-2 bg-gray-952 ">
      <div className="max-w-[100rem] px-12 mx-auto flex justify-between">
        <Link href="/">
          <h1 className={`uppercase text-blue-500 text-center py-2  text-2xl ${font}`}>
            Easy SELL
          </h1>
        </Link>
        <Link
          href="/products/upload"
          className="uppercase text-white py-2 hover:text-blue-700 text-2xl"
        >
          Upload {'+'}
        </Link>
      </div>
    </header>
  );
}
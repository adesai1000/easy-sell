export default function Footer({ font }: { font?: string }) {
    return (
      <footer className="py-12 bg-gray-952 text-gray-953">
        <div
          className={`max-w-[100rem] px-12 mx-auto flex justify-between ${font} text-white` }
        >
          <p className="text-xl">© Ayush Desai</p>
          <a href="https://github.com/adesai1000/easy-sell" target="_blank" className="underline">Source Code</a>
        </div>
      </footer>
    );
  }
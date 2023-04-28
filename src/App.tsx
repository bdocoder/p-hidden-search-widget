import {FC, useState, useRef} from "react";

const App: FC = () => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex min-h-screen bg-slate-100">
      <div className="flex h-12 m-auto">
        <button
          className="flex items-center px-3 bg-white"
          onClick={() => {
            if (!visible) inputRef.current?.focus();
            setVisible(!visible);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          className={`focus:outline-none transition-[width] ease-in-out duration-500 ${
            visible ? "w-48" : "w-0"
          }`}
          ref={inputRef}
          placeholder="Search..."
        />
      </div>
    </main>
  );
};

export default App;

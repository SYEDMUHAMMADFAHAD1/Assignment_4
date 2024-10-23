import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 w-full bg-blue-800 h-20 px-4 shadow-lg">
      <div className="w-auto p-4">
        <Image src="/img/logo.png" alt="logo" width={80} height={160} />
      </div>

      <div className="flex justify-evenly items-center py-2 px-8 w-3/5">
        <h1 className="text-xl text-blue-100 font-serif font-bold">
          Tuition-Free Education Program on Latest Technologies
        </h1>
      </div>

      <div className="flex justify-center gap-8 items-center py-2 px-4 w-2/5">
        <a href="#home" className="text-white text-lg font-normal font-sans transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-300 active:text-cyan-500">
          Home
        </a>
        <a href="#apply" className="text-white text-lg font-normal font-sans transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-300 active:text-cyan-500">
          Apply
        </a>
        <a href="#jobs" className="text-white text-lg font-normal font-sans transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-300 active:text-cyan-500">
          Jobs
        </a>
        <a href="#result" className="text-white text-lg font-normal font-sans transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-300 active:text-cyan-500">
          Result
        </a>
        <a href="#courses" className="text-white text-lg font-normal font-sans transition duration-300 ease-in-out transform hover:scale-110 hover:text-cyan-300 active:text-cyan-500">
          Courses
        </a>
      </div>
    </nav>
  );
}

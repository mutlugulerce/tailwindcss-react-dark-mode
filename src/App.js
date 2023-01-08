import { useEffect, useState } from "react";
import Navbar from './Navbar'



function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")==="light" ? "dark" :"light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  };

  return (

    <div className="h-screen bg-blue-200 dark:bg-gray-400">
      <nav className="w-full flex justify-evenly items-center h-24 bg-blue-400 text-white dark:bg-slate-700">
        <h1>Mutlu Gülerce</h1>
       
        <button
          onClick={changeTheme}
          className="bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-xl"
        >
          {theme} Mode
        </button>
   
      <Navbar />
         
    
      </nav>
      <section className="flex flex-col text-center items-center justify-center h-full w-auto bg-white text-blue-500 dark:bg-gray-500 dark:text-white">
        <h2>HAKKIMDA</h2>
        <p>2022 yılı itibariyle Front-End Developer olma yolunda gerekli olan kursları almaya başladım.Şu anda HTML5,CSS3,Javascript,React,React Redux hakkında bir projede çalışacak bilgim var</p>
      </section>
    </div>

  );
}

export default App;

import Head from 'next/head';
import { useEffect } from 'react';

export default function Index3() {
  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.add('light')
  //   }
  // })

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.toggle('light')
  }

  return (
    <div className="">
      <Head>
        <title>Rizqy Hidayat - Web Engineer &amp; Adventurer</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>

      <header className="relative pt-6 pb-60 flex bg-emerald-50 bg-opacity-50 dark:bg-emerald-900 dark:bg-opacity-50 bg-gradient">
        <div className="max-w-screen-lg mx-auto flex items-center w-full z-10">
          <a href="/" className="text-2xl font-bold">
            <span className="relative z-10">rizqy</span>
            <span className="relative inline-block w-8 h-8 -mx-3 top-2 bg-white bg-opacity-75 rounded-full"></span>
            <span className="relative z-10">me</span>
          </a>

          <nav className="ml-auto">
            <a href="" className="mx-4 text-lg font-medium">Writings</a>
            <a href="" className="mx-4 text-lg font-medium">Projects</a>
            <a href="" className="mx-4 text-lg font-medium">About</a>
            <button type="button" className="mx-4 text-lg" onClick={toggleDarkMode}>🌙</button>
          </nav>
        </div>

        <div className="block absolute w-full h-full inset-0 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80" aria-hidden="true"></div>
      </header>

      <main className="relative max-w-screen-lg mx-auto -mt-20 z-10">
        <div className="flex w-full items-center mb-10">
          <div className="relative">
            <img src="https://pbs.twimg.com/profile_images/1457370436476407811/0C_qixrv_400x400.jpg" alt="Rizqy Hidayat" className="w-40 rounded-full"/>
            <span className="text-5xl absolute bottom-0 -left-3">👋</span>
          </div>

          <div className="ml-8">
            <h1 className="mb-10 text-6xl font-bold">
              Hi! I'm
              <span className="relative mx-2">
                <span class="block absolute inset-y-2 -inset-x-1 h-3/4 -skew-y-2 bg-emerald-300 dark:bg-emerald-900 dark:bg-opacity-50" aria-hidden="true"></span>
                <span className="relative dark:text-slate-300">Rizqy Hidayat</span>
              </span>
            </h1>
            <h2 className="text-2xl">Web Engineer &amp; Adventurer</h2>
          </div>
        </div>

        <p className="md:w-2/3 mb-8 ml-48 text-lg">I'm an adventurer geek. On daily basis, I craft solutions to help solve people's problems, mostly in the form of websites.
          When not crafting, I'm a truck driver across Europe in ETS 2.
          Occasionally, I love to go outside. Hiking a mountain preferably, but lately forest bathing is well enough.
          Currently working fulltime as Product Engineer at <a href="https://www.dicoding.com" target="_blank">Dicoding</a>.
        </p>
        <div className="ml-48">
          <a href="https://twitter.com/rizqyhi" className="inline-flex items-center">
            <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 mr-2 text-slate-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            @rizqyhi
          </a>
          <a href="https://github.com/rizqyhi" className="inline-flex items-center">
            <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 mr-2 text-slate-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            rizqyhi
          </a>
        </div>
      </main>
    </div>
  );
}

import apps from "./apps";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header isHome />
      <div className="my-10 flex place-items-center">
        <span className="lg:text-8xl text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Apps Hall
        </span>
      </div>
      <div className="max-w-5xl grid sm:gap-12 grid-cols-1 lg:grid-cols-2 sm:p-1 my-4 dark:text-white">
        {apps.map((app) => {
          return <Card key={app.appName} {...app} />;
        })}
      </div>
      <a
        href="https://sindresorhus.com/apps"
        className="text-gray-500 dark:text-gray-400 text-sm p-2.5 inline-flex items-center"
      >
        <span className="text-gray-400 dark:text-gray-200/90 text-lg sm:text-xl sm:leading-tight leading-tight">
          Designed by Sindre Sorhus
        </span>
      </a>
    </main>
  );
}

import apps from "../apps";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header hideHomeIcon />
      <div className="my-10 flex place-items-center">
        <span className="text-8xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Apps Hall
        </span>
      </div>
      <div className="max-w-5xl grid sm:gap-12 grid-cols-1 lg:grid-cols-2 sm:p-1 my-4 dark:text-white">
        {apps.map((app) => {
          return <Card key={app.appName} {...app} />;
        })}
      </div>
    </main>
  );
}

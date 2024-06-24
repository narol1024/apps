import { Github } from "lucide-react";

interface HeaderProps {
  isHome?: boolean;
}

export const Header = function (props: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex-none mx-auto w-full bg-white bg-white/90 dark:bg-slate-950 dark:bg-slate-950/90 backdrop-blur-sm border-b dark:border-b-0">
      <header
        data-nosnippet=""
        className="sticky top-0 z-40 flex-none mx-auto w-full bg-white bg-white/90 dark:bg-slate-950 dark:bg-slate-950/90 backdrop-blur-sm border-b dark:border-b-0"
      >
        <div className="py-3 px-3 mx-auto w-full flex justify-between max-w-6xl">
          <div className="flex justify-between">
            {!props.isHome && (
              <a
                href="/apps"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                <span className="text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Apps Hall
                </span>
              </a>
            )}
          </div>
          <nav
            className="items-center flex text-gray-600 dark:text-slate-200"
            aria-label="Main navigation"
          >
            <div className="self-center flex items-center  ml-2">
              <div className=" items-center flex">
                <a
                  target="_blank"
                  href="https://narol.pro"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="self-center flex items-center  ml-2">
              <div className=" items-center flex">
                <a
                  target="_blank"
                  href="https://github.com/narol1024/apps"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                >
                  <Github />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

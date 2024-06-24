import { AppInfo } from "../apps";

export const Card = function (props: AppInfo) {
  return (
    <a
      href={props.website}
      className="flex py-6 px-2 sm:p-6 bg-white dark:bg-black/20 sm:rounded-xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:sm:shadow-indigo-500/20 transition duration-500 dark:sm:border dark:border-slate-800"
    >
      <div className="flex-initial flex-shrink-0 justify-center mr-2 sm:mr-3">
        <img src={props.icon} alt="Vercel Logo" width="128" height="128" />
      </div>
      <div className="flex flex-col justify-center my-3 mr-2 sm:mt-[-1px] gap-2">
        <div className="mb-0.5 text-2xl sm:text-3xl font-bold">
          {props.appName}
          {props.chineseAppName ? `(${props.chineseAppName})` : ""}
        </div>
        <div className="text-gray-400 dark:text-gray-200/90 text-lg sm:text-xl sm:leading-tight leading-tight">
          {props.descriptions}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-3 opacity-90">
          <span className="text-[10px] inline-flex items-center font-bold leading-sm px-1.5 text-black/70 dark:text-black rounded-lg bg-gray-200/80 dark:bg-gray-200">
            {props.price === 0 ? "free" : ""}
          </span>
          {props.platform.map((platform) => {
            return (
              <span
                key={platform}
                className="text-[10px] inline-flex items-center font-bold leading-sm px-1.5 text-black/70 dark:text-black rounded-lg bg-sky-100/90 dark:bg-sky-200"
              >
                {platform}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
};

import { AppInfo } from "../apps";
import React, { PropsWithChildren } from "react";

export const ProductDetail = function (props: PropsWithChildren<AppInfo>) {
  return (
    <>
      <header className="flex flex-col items-center text-center px-4 sm:px-6 mb-4 my-10">
        <img src={props.icon} width="224" height="224" className="mb-3" />
        <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
          {props.appName}
          {props.chineseAppName ? `(${props.chineseAppName})` : ""}
        </h1>
        <h2 className="text-2xl tracking-tight mb-4 text-gray-500">
          {props.descriptions}
        </h2>
        {props.children}
      </header>
      <div className="flex flex-row items-center gap-4 container mx-auto px-6 sm:px-6 max-w-3xl prose prose-lg lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-img:rounded-md prose-img:shadow-lg mt-8 prose-a:text-black/75 dark:prose-a:text-white/90 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary-500 hover:prose-a:decoration-primary-600 prose-a:decoration-2 hover:prose-a:decoration-4 hover:prose-a:text-black dark:hover:prose-a:text-white break-words tracking-normal prose-h4:tracking-normal prose-h5:tracking-normal prose-h6:tracking-normal prose-code:before:hidden prose-code:after:hidden">
        {props.screenshots.map((screenshot) => {
          return (
            <section className="mb-10">
              <img src={screenshot} width="2880" height="1800"></img>
            </section>
          );
        })}
      </div>
    </>
  );
};

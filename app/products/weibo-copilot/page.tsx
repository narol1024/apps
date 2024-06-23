import { WeiboCopilotAppInfo } from "../../apps";
import { Header } from "../../components/Header";
import { ProductDetail } from "../../components/ProductDetail";

export default function WeiboCopilotApp() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <ProductDetail {...WeiboCopilotAppInfo}>
        <nav className="flex flex-row items-center flex-wrap gap-4 justify-center mt-8 font-semibold text-l text-blue-500 instapaper_ignore ">
          <img
            src="https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406232159642.png"
            alt="Download on the App Store"
            className="w-[40px]"
          />
          {WeiboCopilotAppInfo.downloadLinks.map((downloadLink) => {
            return (
              <a
                href={downloadLink.url}
                className="hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-200"
                target="_blank"
              >
                {downloadLink.title}
              </a>
            );
          })}
        </nav>
      </ProductDetail>
    </main>
  );
}

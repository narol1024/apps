import { SikgongAppInfo } from "../../apps";
import { Header } from "../../components/Header";
import { ProductDetail } from "../../components/ProductDetail";

export default function QuillApp() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <ProductDetail {...SikgongAppInfo}>
        <nav className="flex flex-wrap gap-10 justify-center mt-8 font-semibold text-l text-blue-500 instapaper_ignore ">
          {SikgongAppInfo.downloadLinks.map((downloadLink) => {
            return (
              <a
                key={downloadLink.url}
                href={downloadLink.url}
                className="hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-200 text-3xl"
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

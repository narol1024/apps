import { QuillAppInfo } from "../../apps";
import { Header } from "../../components/Header";
import { ProductDetail } from "../../components/ProductDetail";

export default function QuillApp() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <ProductDetail {...QuillAppInfo}>
        <nav className="flex flex-wrap gap-4 justify-center mt-8 font-semibold text-l text-blue-500 instapaper_ignore ">
          {QuillAppInfo.downloadLinks.map((downloadLink) => {
            return (
              <a
                key={downloadLink.url}
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

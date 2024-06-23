import quillIcon from "./assets/quill.png";
import sikgongIcon from "./assets/sikgong.png";
import mortalIcon from "./assets/mortal.png";
import weiboCopilotIcon from "./assets/weibo-copilot.png";

export interface AppInfo {
  appName: string;
  chineseAppName: string;
  icon: string;
  descriptions: string;
  website: string;
  platform: string[];
  price: number;
  screenshots: string[];
  downloadLinks: { title: string; url: string }[];
}

export const QuillAppInfo = {
  appName: "Quill",
  chineseAppName: "翮羽",
  icon: quillIcon.src,
  price: 0,
  descriptions: "基于GPT大模型, 呼之即出的交互，能够让你快速优化英语句子。",
  website: "/products/quill",
  platform: ["Mac"],
  screenshots: [
    "https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406230953822.gif",
    "https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406231012897.png",
  ],
  downloadLinks: [
    {
      title: "DMG安装包",
      url: "https://www.dropbox.com/scl/fi/kpzqgvcynauduj350vwul/Quill.dmg?rlkey=80f1fl51legmk63ciasb62iuk&st=xlnr91js&dl=0",
    },
  ],
} as AppInfo;

export const SikgongAppInfo = {
  appName: "Sikgong",
  chineseAppName: "识讲",
  icon: sikgongIcon.src,
  descriptions: "基于GPT大模型, 支持用粤语对话。",
  website: "/products/sikgong",
  price: 0,
  platform: ["iOS", "Android"],
  screenshots: [
    "https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406232147003.png",
    "https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406232137397.png",
  ],
  downloadLinks: [
    {
      title: "Android",
      url: "https://www.dropbox.com/scl/fi/xxw5k2a2m0z0shrwkn6nm/app-release.apk?rlkey=88g2bx0wx5allxfg286ajiyuv&st=h1rytekx&dl=0",
    },
    {
      title: "iOS",
      url: "#",
    },
  ],
} as AppInfo;

export const MortalAppInfo = {
  appName: "Mortal",
  chineseAppName: "",
  icon: mortalIcon.src,
  price: 0,
  descriptions: "一个纪念Mortal的内容社区",
  website: "https://mortal.zone",
  platform: ["Web"],
  screenshots: [],
  downloadLinks: [],
} as AppInfo;

export const WeiboCopilotAppInfo = {
  appName: "Weibo-Copilot",
  chineseAppName: "",
  icon: weiboCopilotIcon.src,
  price: 0,
  descriptions: "一个新浪微博的辅助工具",
  website: "/products/weibo-copilot",
  platform: ["Windows", "Mac"],
  screenshots: [
    "https://narol-blog.oss-cn-beijing.aliyuncs.com/blog-img/202406222249510.png",
  ],
  downloadLinks: [
    {
      title: "Windows-32位",
      url: "https://pan.baidu.com/s/1fns-FaLrim9vP53xziJr3g",
    },
    {
      title: "Windows-64位",
      url: "https://pan.baidu.com/s/1H9WzMbK3DXUpIFpz-yhDwA",
    },
    {
      title: "Mac-Intel 芯片版",
      url: "https://pan.baidu.com/s/1VafQI0vul9n-rb2UNSXzBw",
    },
    {
      title: "Mac-Apple 芯片版",
      url: "https://pan.baidu.com/s/1XY8ENJ8CekJIW72_EWn2Nw",
    },
  ],
} as AppInfo;

export default [
  QuillAppInfo,
  SikgongAppInfo,
  MortalAppInfo,
  WeiboCopilotAppInfo,
];

import { ImageBlogNews } from "../../../assets/images";
import { news } from "./types";

export const dataNews: news[] = [
  {
    id: 1,
    coment:
      "Layanan SEO-nya cukup membantu untuk pemula yang ingin meningkatkan peringkat situs tanpa terlalu banyak usaha teknis. Fitur dasarnya cukup untuk memberi saya gambaran tentang kata kunci dan analisis sederhana, tapi rasanya harus beralih ke paket lebih mahal untuk fitur SEO yang lebih mendalam.",
    person: "Jane Cooper",
    position: "CEO, JPNL",
    image: ImageBlogNews.jpnl,
  },
  {
    id: 2,
    coment:
      "Dari banyak penyedia hosting yang saya coba, website mereka salah satu yang paling enak dilihat. Navigasinya jelas, dan saya bisa dengan mudah menemukan layanan yang saya butuhkan tanpa merasa kewalahan.",
    person: "Floyd Miles",
    position: "vice President, CLI",
    image: ImageBlogNews.cli,
  },
  {
    id: 3,
    coment:
      "Paket email hosting yang disediakan cukup baik untuk kebutuhan dasar, terutama bagi bisnis kecil yang butuh email dengan nama domain sendiri. Tapi, kapasitas penyimpanan email terasa sedikit terbatas, jadi harus upgrade jika ingin lebih banyak penyimpanan.",
    person: "Kristin Watson",
    position: "CO-Founder, LeeveOn Branding",
    image: ImageBlogNews.leeveOnBranding,
  },
];

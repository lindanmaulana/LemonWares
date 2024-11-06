export interface heroBannerProps {
  element: {
    route: string
  }
}

export interface listHeroBanner {
  id: number | string;
  title: string;
  link: string;
}

export const dataListHeroBanner: listHeroBanner[] = [
  {
    id: 1,
    title: "Hosting",
    link: "hosting",
  },
  {
    id: 2,
    title: "Domain",
    link: "domain",
  },
  {
    id: 3,
    title: "SEO",
    link: "seo",
  },
  {
    id: 4,
    title: "Email",
    link: "email",
  },
];

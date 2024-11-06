
export interface ourServicesProps {
  element: {
    type: string;
    route: string;
  };
}

export const service: string[] = [""];

export type typeService = "starter" | "standard" | "suprem";

export interface service {
  id: number | string;
  type: typeService;
  desc: string;
  price: number;
  SSD: number;
  BandWidth: number;
  EmailAcounts: number;
  UnlimitedDatabase: boolean;
  SubDomains: number;
  ParkedDomain: number;
  Websites: number;
  SSL: boolean;
  Softaculous: boolean;
}




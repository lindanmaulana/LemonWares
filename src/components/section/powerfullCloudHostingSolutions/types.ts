import { ImagePowerfullCloudHostingSolutions, ImageServices } from "../../../assets/images";

export interface listCloudHosting {
  id: number | string;
  image: string;
}

export const dataListPowerfullCloudHostingSolutions: listCloudHosting[] = [
  {
    id: 1,
    image: ImagePowerfullCloudHostingSolutions.cpanel,
  },
  {
    id: 2,
    image: ImagePowerfullCloudHostingSolutions.securedImunify,
  },
  {
    id: 3,
    image: ImagePowerfullCloudHostingSolutions.liteSpeed,
  },
  {
    id: 4,
    image: ImagePowerfullCloudHostingSolutions.softaculous,
  },
  {
    id: 5,
    image: ImagePowerfullCloudHostingSolutions.wordPress,
  },
  {
    id: 6,
    image: ImagePowerfullCloudHostingSolutions.cloudFlare,
  },
];

export interface services {
  id: number | string;
  title: string;
  desc: string;
  image: string
}

export const dataServices: services[] = [
  {
    id: 1,
    title: "99.9% Uptime",
    desc: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    image: ImageServices.uptime
  },
  {
    id: 2,
    title: "Blazing Fast Web Hosting",
    desc: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    image: ImageServices.blazingFastWebHosting
  },
  {
    id: 3,
    title: "Free SSL Certificates",
    desc: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    image: ImageServices.freeSSLCertificates
  },
  {
    id: 4,
    title: "24x7 Friendly Support",
    desc: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    image: ImageServices.friendlySupport
  },
];

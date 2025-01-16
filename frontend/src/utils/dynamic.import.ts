import dynamic from "next/dynamic";

export const dynamicImport = (
  importFunction: () => Promise<any>,
  ssr: boolean = false
) => {
  return dynamic(importFunction, { ssr });
};

export const ServiceSwiper = dynamicImport(() => import('@/components/swiper/swiper').then((mod) => mod.default));
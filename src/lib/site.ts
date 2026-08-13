export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gultzz.github.io").replace(/\/$/, "");
export const siteName = "Gustavo Schultz Portfolio";

export const searchVerification = {
  google: process.env.GOOGLE_SITE_VERIFICATION,
  bing: process.env.BING_SITE_VERIFICATION,
};

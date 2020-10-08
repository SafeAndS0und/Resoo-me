import puppeteer from "puppeteer";

export const Page = async () => {
  const browser = await puppeteer.launch();
  return await browser.newPage();
};

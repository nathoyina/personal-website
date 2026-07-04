import { mkdir, writeFile } from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";
import { projects } from "../data/projects";

const OUTPUT_DIR = path.join(process.cwd(), "public", "projects");
const VIEWPORT = { width: 1200, height: 750 };

async function captureScreenshot(url: string, outputPath: string) {
  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({ path: outputPath, type: "png" });
    console.log(`✓ Captured ${outputPath}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const project of projects) {
    if (!project.demoUrl) continue;
    const outputPath = path.join(OUTPUT_DIR, `${project.slug}.png`);
    try {
      await captureScreenshot(project.demoUrl, outputPath);
    } catch (err) {
      console.error(`✗ Failed ${project.slug}:`, err);
    }
  }
}

main();

// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://jeonguriii.github.io/Kimjeongseok.github.io/ (하위 경로)
// Vercel: 도메인 루트(/)에서 서비스 → base를 '/'로 바꿔야 이미지·CSS 경로가 맞음
const onVercel = !!process.env.VERCEL;
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || (onVercel && vercelHost ? `https://${vercelHost}` : 'https://jeonguriii.github.io'),
  base: onVercel ? '/' : '/Kimjeongseok.github.io',
});

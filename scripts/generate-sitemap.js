const fs = require('fs');
const { getSortedPosts } = require('../utils/getPosts');

const posts = getSortedPosts();
const categories = [...new Set(posts.map((post) => post.category.toLowerCase()))];

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://yourdomain.com';

const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}/</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${categories
    .map(
      (category) => `
      <url>
        <loc>${domain}/category/${category.replace(' ', '-')}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join('')}
    ${posts
    .map(
      (post) => `
      <url>
        <loc>${domain}${post.slug}</loc>
        <lastmod>${post.date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
    )
    .join('')}
  </urlset>
`.trim();

try {
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
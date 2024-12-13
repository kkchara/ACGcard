import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  req: VercelRequest,
  res: VercelResponse
): void {
  // 设置Content-Type为image/svg+xml
  res.setHeader('Content-Type', 'image/svg+xml');

  // 返回一个简单的SVG图片
  const svgContent = `
    <svg
    width="200"    
    height="500"    
    xmlns="http://www.w3.org/2000/svg">   

    <circle cx="100" cy="100" r="50" fill="red" />
    <rect x="50" y="50" width="100" height="50" rx="5" ry="5" fill="blue" />
    <text x="100" y="100" font-size="24" fill="white" stroke="red" text-anchor="middle">hello</text>
    
    </svg>
  `;

  res.status(200).send(svgContent);
}
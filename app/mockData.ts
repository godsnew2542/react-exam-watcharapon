import type { Product } from "./types/Product";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'โทรศัพท์สมาร์ทฟอนรุ่นล่าสุด',
    price: 39900,
    image: '/api/placeholder/300/200',
    category: 'electronics'
  },
  {
    id: '2',
    name: 'MacBook Air M3',
    description: 'แล็ปท็อปสำหรับงานทั่วไป',
    price: 45900,
    image: '/api/placeholder/300/200',
    category: 'electronics'
  },
  {
    id: '3',
    name: 'เสื้อยืดคอตตอน',
    description: 'เสื้อยืดคุณภาพดี นุ่มสบาย',
    price: 299,
    image: '/api/placeholder/300/200',
    category: 'clothing'
  },
  {
    id: '4',
    name: 'กางเกงยีนส์',
    description: 'กางเกงยีนส์ทรงสวย ใส่สบาย',
    price: 899,
    image: '/api/placeholder/300/200',
    category: 'clothing'
  },
  {
    id: '5',
    name: 'JavaScript: The Good Parts',
    description: 'หนังสือเรียน JavaScript',
    price: 450,
    image: '/api/placeholder/300/200',
    category: 'books'
  },
  {
    id: '6',
    name: 'Clean Code',
    description: 'หนังสือเขียนโค้ดที่สะอาด',
    price: 520,
    image: '/api/placeholder/300/200',
    category: 'books'
  },
  {
    id: '7',
    name: 'หม้อหุงข้าว',
    description: 'หม้อหุงข้าวไฟฟ้า 1.8 ลิตร',
    price: 1290,
    image: '/api/placeholder/300/200',
    category: 'home'
  },
  {
    id: '8',
    name: 'โต๊ะทำงาน',
    description: 'โต๊ะทำงานไม้ขนาด 120x60 ซม.',
    price: 2499,
    image: '/api/placeholder/300/200',
    category: 'home'
  }
];
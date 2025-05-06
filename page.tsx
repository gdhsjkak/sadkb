'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">سوق VIP Scripts</h1>
          <p className="text-xl md:text-2xl mb-8">أفضل السكربتات والأدوات للعبة FiveM</p>
          <div className="flex gap-4 justify-center">
            <Link href="/scripts" className="bg-accent hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold">
              تصفح السكربتات
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-semibold">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">تصفح حسب الفئة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="bg-secondary p-6 rounded-xl hover:bg-accent/20 transition-all"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-400">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const categories = [
  {
    id: 'scripts',
    title: 'السكربتات',
    description: 'أفضل سكربتات FiveM المميزة',
    icon: '📜'
  },
  {
    id: 'tools',
    title: 'الأدوات',
    description: 'أدوات مساعدة للمطورين',
    icon: '🛠️'
  },
  {
    id: 'vehicles',
    title: 'السيارات',
    description: 'سيارات FiveM المميزة',
    icon: '🚗'
  },
  {
    id: 'phones',
    title: 'الهواتف',
    description: 'هواتف FiveM المميزة',
    icon: '📱'
  }
]; 
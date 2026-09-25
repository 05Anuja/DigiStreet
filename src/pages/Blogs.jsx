import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import CTA from '../components/CTA';
import { BLOG_POSTS } from '../data/blogsData';
import { Search, Sparkles, Filter } from 'lucide-react';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Branding & Packaging', 'Video Production', 'Search Advertising', 'Lead Generation', 'Web Development', 'Growth Strategies'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        
        <Hero 
          badge="DigiStreet Insights & Intelligence"
          title="An Amazing Thought Can Build a Brilliant World"
          subtitle="Articles, deep dives, and growth frameworks from our senior strategists."
          description="Actionable perspectives on performance marketing, brand packaging, enterprise SEO, and cross-border expansion in the age of generative AI search."
          breadcrumbs={[{ label: 'Blog & Insights' }]}
          showCta={false}
        />

        {/* Filter and Search Bar */}
        <section className="py-8 bg-[#FAF9F6] border-b border-zinc-200/80 sticky top-[73px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs font-semibold">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-black text-white' 
                      : 'bg-white text-zinc-700 border border-zinc-200 hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search articles & guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-zinc-200 text-xs focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 sm:py-24 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-zinc-500 text-base">No articles matched your filter criteria.</p>
                <button 
                  type="button" 
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="mt-4 text-sm font-semibold text-black underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <BlogCard 
                    key={idx}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    readTime={post.readTime}
                    category={post.category}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        <CTA 
          badge="Get New Insights First"
          title="Looking to apply these insights to your brand?"
          description="Speak with our strategy team to identify performance opportunities across your organic search and paid acquisition channels."
        />

      </main>

      <Footer />
    </div>
  );
}

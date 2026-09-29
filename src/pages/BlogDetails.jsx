import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import BlogCard from "../components/BlogCard";
import CTA from "../components/CTA";
import { BLOG_POSTS } from "../data/blogsData";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function BlogDetails() {
  const { slug } = useParams();

  // Find post by slug
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(
    0,
    3,
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Article Header */}
        <article className="pt-10 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-6 flex-wrap">
              <Link to="/" className="hover:text-black">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link to="/blog" className="hover:text-black">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-800 font-medium truncate max-w-xs">
                {post.title}
              </span>
            </nav>

            <div className="space-y-4 mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-2 border-y border-zinc-100 py-3">
                <span className="flex items-center gap-1.5 font-medium text-zinc-800">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{post.author || "Silgate Media"}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-zinc-100 mb-12 border border-zinc-200 shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed text-base space-y-8">
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border-l-4 border-black text-base text-zinc-800 font-medium italic">
                "{post.excerpt}"
              </div>

              {post.sections &&
                post.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 pt-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-zinc-600 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}

              <div className="pt-6 border-t border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  Key Strategic Takeaways
                </h3>
                <ul className="space-y-2.5 text-sm text-zinc-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>
                      Always align creative messaging directly with the target
                      territory's regulatory and commercial expectations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>
                      Prioritize organic brand authority and high-fidelity video
                      over superficial paid ad blitzes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>
                      Engage an agency partner equipped with cross-border
                      operational and technical infrastructure.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Share & Back Navigation */}
            <div className="mt-12 pt-8 border-t border-zinc-200 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Insights</span>
              </Link>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span>Published by Silgate Media Pvt Ltd</span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="py-16 bg-[#FAF9F6] border-t border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">
              Related Thought Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost, i) => (
                <BlogCard
                  key={i}
                  title={rPost.title}
                  slug={rPost.slug}
                  excerpt={rPost.excerpt}
                  image={rPost.image}
                  date={rPost.date}
                  readTime={rPost.readTime}
                  category={rPost.category}
                />
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Looking to execute this strategy for your brand?"
          description="Speak with our account directors today for a custom evaluation and roadmap."
        />
      </main>

      <Footer />
    </div>
  );
}

import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blog.json';
import usePageTitle from '../hooks/usePageTitle';

const BlogPage = () => {
  usePageTitle('Blog');

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-text-main">News & Insights</h1>
          <p className="text-text-light mt-4 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and news from the real estate market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 
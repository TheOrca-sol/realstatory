import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blog.json';
import NotFoundPage from './NotFoundPage';
import usePageTitle from '../hooks/usePageTitle';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  usePageTitle(post ? post.title : 'Post Not Found');

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="text-primary hover:underline font-semibold mb-8 inline-block">
          &larr; Back to Blog
        </Link>
        <h1 className="text-5xl font-serif font-bold text-text-main mb-4">{post.title}</h1>
        <p className="text-text-light mb-8">
          By {post.author} on {new Date(post.date).toLocaleDateString()}
        </p>
        <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
        <div 
          className="prose lg:prose-xl max-w-none text-text-light"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
};

export default BlogPostPage; 
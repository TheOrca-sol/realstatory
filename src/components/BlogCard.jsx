import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-text-light">{new Date(post.date).toLocaleDateString()}</p>
        <h3 className="text-2xl font-serif font-bold text-text-main mt-2">{post.title}</h3>
        <p className="text-text-light mt-4 flex-grow">{post.excerpt}</p>
        <div className="mt-auto pt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="font-bold text-primary hover:underline"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 
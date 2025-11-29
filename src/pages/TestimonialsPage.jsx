import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testimonials.json';
import usePageTitle from '../hooks/usePageTitle';

const TestimonialsPage = () => {
  usePageTitle('Client Testimonials');

  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-text-main">What Our Clients Say</h1>
          <p className="text-text-light mt-4 text-lg max-w-2xl mx-auto">
            We are proud to have helped so many people find their dream homes and manage their properties. Here's what they have to say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 
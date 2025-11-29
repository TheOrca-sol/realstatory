import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import RentalsPage from './pages/RentalsPage';
import RentalDetailPage from './pages/RentalDetailPage'; // Import new page
import ServicesPage from './pages/ServicesPage';
import ConciergeriePage from './pages/ConciergeriePage';
import AutomationPage from './pages/AutomationPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage'; // Import new page
import BlogPostPage from './pages/BlogPostPage'; // Import new page
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AnimatedPage from './components/AnimatedPage';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="properties" element={<AnimatedPage><PropertiesPage /></AnimatedPage>} />
          <Route path="property/:id" element={<AnimatedPage><PropertyDetailPage /></AnimatedPage>} />
          <Route path="rentals" element={<AnimatedPage><RentalsPage /></AnimatedPage>} />
          <Route path="rentals/:id" element={<AnimatedPage><RentalDetailPage /></AnimatedPage>} />
          <Route path="services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
          <Route path="services/conciergerie" element={<AnimatedPage><ConciergeriePage /></AnimatedPage>} />
          <Route path="services/automation" element={<AnimatedPage><AutomationPage /></AnimatedPage>} />
          <Route path="testimonials" element={<AnimatedPage><TestimonialsPage /></AnimatedPage>} />
          <Route path="blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
          <Route path="blog/:slug" element={<AnimatedPage><BlogPostPage /></AnimatedPage>} />
          <Route path="contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return <AppRoutes />;
}

export default App;

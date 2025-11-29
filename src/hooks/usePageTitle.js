import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} | RealStatory`;
    
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
};

export default usePageTitle; 
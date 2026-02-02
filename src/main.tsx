import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add scroll animations
const addScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right').forEach(el => {
    observer.observe(el);
  });
};

// Initialize animations after DOM is ready
setTimeout(addScrollAnimations, 100);

createRoot(document.getElementById("root")!).render(<App />);

// Main JavaScript file 

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a.nav-scroll-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        // Optional: Close mobile menu if open after click
        const navTrigger = document.getElementById('nav-trigger');
        if (navTrigger && navTrigger.checked) {
          navTrigger.checked = false;
        }
      }
    });
  });

  // Active link highlighting using Intersection Observer
  const sections = document.querySelectorAll('.page-section');
  const headerNavLinks = document.querySelectorAll('.site-nav .nav-scroll-link'); // More specific selector

  if (sections.length > 0 && headerNavLinks.length > 0) {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const visibleSectionId = entry.target.id;
          headerNavLinks.forEach(navLink => {
            if (navLink.getAttribute('href') === `#${visibleSectionId}`) {
              navLink.classList.add('active');
            } else {
              navLink.classList.remove('active');
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // BibTeX toggle functionality
  const bibtexToggleButtons = document.querySelectorAll('.bibtex-toggle-button');
  bibtexToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const bibtexContent = document.getElementById(targetId);
      if (bibtexContent) {
        const isHidden = bibtexContent.style.display === 'none' || bibtexContent.style.display === '';
        bibtexContent.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Hide BibTeX' : 'BibTeX';
      }
    });
  });

}); 

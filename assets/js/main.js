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

  // Function to add copy buttons to code blocks
  function addCopyButtonsToCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre'); // Select all <pre> elements

    codeBlocks.forEach(block => {
      const codeElement = block.querySelector('code');
      if (!codeElement) return; // Skip if no <code> element found inside <pre>

      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.textContent = 'Copy';

      // Style button for positioning (can be enhanced in CSS)
      block.style.position = 'relative'; // Needed for absolute positioning of the button
      button.style.position = 'absolute';
      button.style.top = '5px';
      button.style.right = '5px';
      // Add more styles via CSS class .copy-code-button

      button.addEventListener('click', async () => {
        const codeToCopy = codeElement.innerText;
        try {
          await navigator.clipboard.writeText(codeToCopy);
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000); // Reset button text after 2 seconds
        } catch (err) {
          console.error('Failed to copy text: ', err);
          button.textContent = 'Error'; // Indicate failure
           setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        }
      });

      block.appendChild(button);
    });
  }

  addCopyButtonsToCodeBlocks(); // Call the function to add buttons

}); 

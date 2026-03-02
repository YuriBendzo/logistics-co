export function initNav() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.nav__mobile-toggle');
  const navList = document.querySelector('.nav__list');
  const dropdownToggles = document.querySelectorAll('.nav__link[aria-haspopup="true"]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  const closeMobileMenu = () => {
    if (mobileToggle && mobileToggle.getAttribute('aria-expanded') === 'true') {
      mobileToggle.setAttribute('aria-expanded', 'false');

      navList.style.display = '';
      navList.style.flexDirection = '';
      navList.style.position = '';
      navList.style.top = '';
      navList.style.left = '';
      navList.style.width = '';
      navList.style.backgroundColor = '';
      navList.style.padding = '';
      navList.style.boxShadow = '';
    }
  };

  const closeAllDropdowns = () => {
    dropdownToggles.forEach(toggle => {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        const dropdown = toggle.nextElementSibling;
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(10px)';
      }
    });
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      
      if (!isExpanded) {
        mobileToggle.setAttribute('aria-expanded', 'true');
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.top = '100%';
        navList.style.left = '0';
        navList.style.width = '100%';
        navList.style.backgroundColor = '#fff';
        navList.style.padding = '1rem';
        navList.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        closeMobileMenu();
      }
    });
  }

  dropdownToggles.forEach(toggle => {
    const handleDropdownToggle = (e) => {
      e.preventDefault();
      const dropdown = toggle.nextElementSibling;
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      
      if (!isExpanded) {
        closeAllDropdowns(); 
      }
      
      toggle.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        dropdown.style.transform = 'translateY(0)';
      } else {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(10px)';
      }
    };

    toggle.addEventListener('click', handleDropdownToggle);

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleDropdownToggle(e);
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (header && !header.contains(e.target)) {
      closeMobileMenu();
      closeAllDropdowns();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeAllDropdowns();
    }
  });
}
// Anything that fires off on load of the script
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(simulateTyping, 1000);
});


// Typewritter
const simulateTyping = () => {
  const marketingText = document.querySelector(".marketing-text");
  const words = [
    "Networking Web App", "Project Organizer", "Online Shop", "Client Relations",
    "Budget Analyzer", "Home Catalog", "Study Platform", "Event Organizer",
    "Meal Delivery", "Team Hub", "Staff Manager", "Member Subscriptions",
    "Online Forum", "Trip Booker", "Business Network", "Chat Bots"
  ];

  let wordIndex = 0;
  let letterIndex = 0;
  let typingSpeed = 100;
  let nextWordDelay = 3000;
  let typingInterval;

  const typeLetter = () => {
    marketingText.textContent += words[wordIndex][letterIndex];
    letterIndex++;

    if (letterIndex === words[wordIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        letterIndex = 0;
        marketingText.textContent = "";
        continueTyping();
      }, nextWordDelay);
    }
  };
  const continueTyping = () => {
    typingInterval = setInterval(typeLetter, typingSpeed);
  };
  continueTyping();
};

// Scroller
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

// Checks whether or not the element is in view
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// If the element is in view it will assign a class to it
const checkContactSection = () => {
  const contactSection = document.getElementById('contact');
  if (isInViewport(contactSection)) {
    contactSection.classList.add('active-contact');
  } else {
    contactSection.classList.remove('active-contact');
  }
}

window.addEventListener('scroll', checkContactSection);

// Slides in elements as the user scrolls
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  const elements = document.querySelectorAll('.pop-in');
  elements.forEach(el => observer.observe(el));
});

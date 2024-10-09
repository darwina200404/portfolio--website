// Animate skill bars when scrolling
window.addEventListener('scroll', function() {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-level');
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (sectionPosition < screenPosition) {
      skillBars.forEach(skillBar => {
          skillBar.style.width = skillBar.getAttribute('style').split('width: ')[1];
      });
  }
});

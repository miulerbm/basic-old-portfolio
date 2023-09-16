
// JavaScript

    // Get the current year and update the content of the "current-year" element
const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;


document.addEventListener('DOMContentLoaded', () => {
    // Function to show a specific section and hide others
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.right-side > section');
        sections.forEach(section => {
            if (section.id === `${sectionId}-content`) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Function to load content from a file into an element
    function loadContent(sectionId, filename) {
        const contentContainer = document.getElementById(sectionId);

        fetch(filename)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
            });
    }

    // Load the "Bio" section when the page first loads
    loadContent('right-side', 'sections/bio.html');
    
    // Show the "Bio" section by default
    showSection('bio-content');

    // Add event listeners to buttons to load content
    document.getElementById('bio-button').addEventListener('click', () => {
        loadContent('right-side', 'sections/bio.html');
        showSection('bio-content');
    });
    
    document.getElementById('projects-button').addEventListener('click', () => {
        loadContent('right-side', 'sections/projects.html');
        showSection('projects-content');
    });
    
    document.getElementById('interests-button').addEventListener('click', () => {
        loadContent('right-side', 'sections/interests.html');
        showSection('interests-content');
    });
});

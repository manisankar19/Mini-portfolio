// Projects toggle functionality
const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
const projectsContent = document.querySelector('.projects-content');

// Toggle projects section visibility
toggleProjectsBtn.addEventListener('click', () => {
    projectsContent.classList.toggle('visible');
    
    // Update button text based on visibility
    if (projectsContent.classList.contains('visible')) {
        toggleProjectsBtn.textContent = 'Hide Projects';
    } else {
        toggleProjectsBtn.textContent = 'Toggle Projects';
    }
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format
function validateEmail(email) {
    return emailRegex.test(email);
}

// Show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
}

// Clear error message
function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.remove('error');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Validate individual fields
function validateField(input) {
    const value = input.value.trim();
    
    if (input === nameInput) {
        if (value === '') {
            showError(input, 'Name is required');
            return false;
        }
        clearError(input);
        return true;
    }
    
    if (input === emailInput) {
        if (value === '') {
            showError(input, 'Email is required');
            return false;
        }
        if (!validateEmail(value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
        clearError(input);
        return true;
    }
    
    if (input === messageInput) {
        if (value === '') {
            showError(input, 'Message is required');
            return false;
        }
        clearError(input);
        return true;
    }
    
    return true;
}

// Real-time validation on blur
nameInput.addEventListener('blur', () => validateField(nameInput));
emailInput.addEventListener('blur', () => validateField(emailInput));
messageInput.addEventListener('blur', () => validateField(messageInput));

// Clear errors on input
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        clearError(nameInput);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        clearError(emailInput);
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        clearError(messageInput);
    }
});

// Form submission handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isMessageValid = validateField(messageInput);
    
    if (isNameValid && isEmailValid && isMessageValid) {
        // Form is valid - you can add your form submission logic here
        // For example, send data to a server or show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        // Scroll to first error
        const firstError = contactForm.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
        }
    }
});


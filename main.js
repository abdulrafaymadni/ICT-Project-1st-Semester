/* ========================================
   PRESCOTT & CO. - JAVASCRIPT FILE
   Handles form validation and interactions
   ======================================== */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------
    // FORM VALIDATION
    // ----------------------------------------
    
    /**
     * Validates an email address format
     * @param {string} email - The email to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function isValidEmail(email) {
        // Simple email regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    /**
     * Validates password strength
     * @param {string} password - The password to validate
     * @returns {boolean} - True if valid (min 6 characters)
     */
    function isValidPassword(password) {
        return password.length >= 6;
    }
    
    /**
     * Shows an error message for a form field
     * @param {HTMLElement} inputElement - The input element
     * @param {string} message - The error message to display
     */
    function showError(inputElement, message) {
        // Find the error element (sibling with class 'form__error')
        const errorElement = inputElement.parentElement.querySelector('.form__error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('visible');
        }
        // Add error styling to input
        inputElement.style.borderColor = '#B44D4D';
    }
    
    /**
     * Clears the error message for a form field
     * @param {HTMLElement} inputElement - The input element
     */
    function clearError(inputElement) {
        const errorElement = inputElement.parentElement.querySelector('.form__error');
        if (errorElement) {
            errorElement.classList.remove('visible');
        }
        // Reset input styling
        inputElement.style.borderColor = '';
    }
    
    // ----------------------------------------
    // LOGIN FORM HANDLING
    // ----------------------------------------
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting normally
            event.preventDefault();
            
            // Get form field values
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            // Track if form is valid
            let isValid = true;
            
            // Validate email
            if (!email) {
                showError(document.getElementById('loginEmail'), 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError(document.getElementById('loginEmail'), 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearError(document.getElementById('loginEmail'));
            }
            
            // Validate password
            if (!password) {
                showError(document.getElementById('loginPassword'), 'Please enter your password.');
                isValid = false;
            } else if (!isValidPassword(password)) {
                showError(document.getElementById('loginPassword'), 'Password must be at least 6 characters.');
                isValid = false;
            } else {
                clearError(document.getElementById('loginPassword'));
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Login successful! Welcome back to Prescott & Co.');
                // In a real application, you would send data to a server here
                // For now, redirect to homepage
                window.location.href = 'index.html';
            }
        });
    }
    
    // ----------------------------------------
    // SIGNUP FORM HANDLING
    // ----------------------------------------
    
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting normally
            event.preventDefault();
            
            // Get form field values
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Track if form is valid
            let isValid = true;
            
            // Validate name
            if (!name) {
                showError(document.getElementById('signupName'), 'Please enter your full name.');
                isValid = false;
            } else if (name.length < 2) {
                showError(document.getElementById('signupName'), 'Name must be at least 2 characters.');
                isValid = false;
            } else {
                clearError(document.getElementById('signupName'));
            }
            
            // Validate email
            if (!email) {
                showError(document.getElementById('signupEmail'), 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError(document.getElementById('signupEmail'), 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearError(document.getElementById('signupEmail'));
            }
            
            // Validate password
            if (!password) {
                showError(document.getElementById('signupPassword'), 'Please create a password.');
                isValid = false;
            } else if (!isValidPassword(password)) {
                showError(document.getElementById('signupPassword'), 'Password must be at least 6 characters.');
                isValid = false;
            } else {
                clearError(document.getElementById('signupPassword'));
            }
            
            // Validate confirm password
            if (!confirmPassword) {
                showError(document.getElementById('signupConfirmPassword'), 'Please confirm your password.');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError(document.getElementById('signupConfirmPassword'), 'Passwords do not match.');
                isValid = false;
            } else {
                clearError(document.getElementById('signupConfirmPassword'));
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Account created successfully! Welcome to Prescott & Co.');
                // In a real application, you would send data to a server here
                // For now, redirect to homepage
                window.location.href = 'index.html';
            }
        });
    }
    
    // ----------------------------------------
    // REAL-TIME INPUT VALIDATION
    // Clear errors when user starts typing
    // ----------------------------------------
    
    const allInputs = document.querySelectorAll('.form__input');
    
    allInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
    
    // ----------------------------------------
    // SIZE SELECTOR (Product Page)
    // ----------------------------------------
    
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove 'active' class from all options
            sizeOptions.forEach(function(opt) {
                opt.classList.remove('active');
            });
            // Add 'active' class to clicked option
            this.classList.add('active');
        });
    });
    
    // ----------------------------------------
    // ADD TO CART BUTTON (Product Page)
    // ----------------------------------------
    
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Check if a size is selected
            const selectedSize = document.querySelector('.size-option.active');
            
            if (!selectedSize) {
                alert('Please select a size before adding to cart.');
                return;
            }
            
            // Get size value
            const size = selectedSize.textContent;
            
            // Show confirmation
            alert('Added to cart!\nSize: ' + size + '\n\nThank you for shopping with Prescott & Co.');
        });
    }
    
    // ----------------------------------------
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ----------------------------------------
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            // Only proceed if it's not just "#"
            if (targetId !== '#') {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ----------------------------------------
    // CONSOLE LOG FOR DEBUGGING
    // ----------------------------------------
    
    console.log('Prescott & Co. - JavaScript loaded successfully.');
});
const products = {
    westminster: {
        title: "The Westminster",
        category: "Tailored Suits",
        price: "88,900 PKR",
        description: "A masterpiece of English tailoring, cut from premium Super 150s wool...",
        image: "Images/suit.jpg"
    },
    casual: {
        title: "Cable-Knit Quarter-Zip",
        category: "wool and cashmere blend",
        price: "29,500 PKR",
        description: "Relaxed tailoring for everyday sophistication...",
        image: "Images/elegance1.jpg"
        
    },
    accessories: {
        title: "Tank Louis Watch",
        category: "18K rose gold",
        price: "15,000 PKR",
        description: "Add the finishing touch to your style with curated accessories.",
        image: "Images/watch2.jpg"
    },
    outerwear:{
        title: "Trench Coat - Off-White",
        category: "Wool",
        price: "45,000 PKR",
        description: "Outerwear with timeless appeal...",
        image: "Images/offwhitesuit.jpg"
    },
    formal:{
        title: "Double-Knit Suit Trouser",
        category: "double-knit fabric",
        price: "20,000 PKR",
        description: "Formal wear crafted to perfection...",
        image: "Images/Gentleman Style.jpg"
    },
    footwear:{
        title: "Summer Walk Loafer",
        category: "Suede",
        price: "25,000 PKR",
        description: "Handcrafted footwear...",
        image: "Images/Bestsellers.jpg"
    },
};

// Populate page dynamically
const urlParams = new URLSearchParams(window.location.search);
const productKey = urlParams.get('product') || 'westminster';
const product = products[productKey];

document.getElementById('productTitle').textContent = product.title;
document.getElementById('productCategory').textContent = product.category;
document.getElementById('productPrice').textContent = product.price;
document.getElementById('productDescription').textContent = product.description;
document.getElementById('productImage').innerHTML = `<img src="${product.image}" alt="${product.title}">`;
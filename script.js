document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadModal = document.getElementById('downloadModal');
    const overlay = document.getElementById('overlay');
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Animate download count
    animateCounter();
    
    // Animate executor display
    animateExecutorDisplay();
    
    // Animate feature cards on load
    animateFeatureCards();
    
    // Add click event to download button
    downloadBtn.addEventListener('click', function() {
        // Add animation classes
        downloadModal.classList.add('active');
        overlay.classList.add('active');
        
        // Add animation to the modal for a cinematic effect
        const modalContent = downloadModal.querySelector('.modal-content');
        modalContent.style.animation = 'fadeIn 0.5s ease forwards';
    });
    
    // Close modal when clicking outside
    overlay.addEventListener('click', function() {
        closeModal();
    });
    
    // Function to close modal
    function closeModal() {
        downloadModal.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    // Add hover effects to download options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('mouseenter', function() {
            // Add scale effect on hover
            this.style.transform = 'translateY(-5px) scale(1.03)';
            
            // Create glowing effect based on option type
            if (this.classList.contains('linkvertise')) {
                this.style.boxShadow = '0 10px 25px rgba(255, 204, 0, 0.2)';
            } else if (this.classList.contains('lootlabs')) {
                this.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.2)';
            }
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        // Add click animation
        option.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Add parallax effect to showcase elements
    addParallaxEffect();
    
    // Add particle animation to background
    createParticles();
    
    // Add hover effect to feature cards
    enhanceFeatureCards();
    
    // Add scroll animations
    addScrollAnimations();
});

// Function to initialize custom cursor
function initCustomCursor() {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        // Update cursor position
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Add slight delay to outline for effect
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Change cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, .feature-card, .showcase-feature, .testimonial');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
            cursorOutline.style.borderColor = 'rgba(203, 20, 20, 0.8)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'rgba(203, 20, 20, 0.5)';
        });
    });
    
    // Add cursor effects on mouse down/up
    document.addEventListener('mousedown', function() {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.4)';
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// Function to animate counter
function animateCounter() {
    const counter = document.getElementById('downloadCount');
    const targetCount = 160000;
    let currentCount = 0;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const increment = Math.ceil(targetCount / totalFrames);
    
    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            clearInterval(timer);
            counter.textContent = targetCount.toLocaleString();
        } else {
            counter.textContent = currentCount.toLocaleString();
        }
    }, frameDuration);
}

// Function to add parallax effect to showcase
function addParallaxEffect() {
    document.addEventListener('mousemove', function(e) {
        const showcaseImage = document.querySelector('.showcase-image');
        if (showcaseImage) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            showcaseImage.style.transform = `translateX(${mouseX * -20}px) translateY(${mouseY * -20}px)`;
        }
    });
}

// Function to enhance feature cards with interactive effects
function enhanceFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
            
            // Get the border color and create a glow effect
            const computedStyle = window.getComputedStyle(this);
            const borderColor = computedStyle.borderLeftColor;
            
            this.style.boxShadow = `0 10px 25px ${borderColor.replace(')', ', 0.3)')}`; 
            
            // Animate the icon
            const icon = this.querySelector('.feature-icon i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset icon animation
            const icon = this.querySelector('.feature-icon i');
            icon.style.transform = '';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Also enhance showcase features
    const showcaseFeatures = document.querySelectorAll('.showcase-feature');
    showcaseFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'all 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = '';
        });
    });
}

// Function to animate feature cards on page load
function animateFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        // Set animation delay based on index
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
}

// Function to add scroll animations
function addScrollAnimations() {
    // Get all sections that need scroll animations
    const sections = document.querySelectorAll('.showcase, .testimonials');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate testimonials if they're visible
                if (entry.target.classList.contains('testimonials')) {
                    const testimonials = entry.target.querySelectorAll('.testimonial');
                    testimonials.forEach((testimonial, index) => {
                        setTimeout(() => {
                            testimonial.style.opacity = '1';
                            testimonial.style.transform = 'translateY(0)';
                        }, 200 + (index * 150));
                    });
                }
                
                // Animate showcase features if they're visible
                if (entry.target.classList.contains('showcase')) {
                    const features = entry.target.querySelectorAll('.showcase-feature');
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.style.opacity = '1';
                            feature.style.transform = 'translateX(0)';
                        }, 300 + (index * 200));
                    });
                }
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
        
        // Set initial state for animation
        if (section.classList.contains('showcase')) {
            const features = section.querySelectorAll('.showcase-feature');
            features.forEach(feature => {
                feature.style.opacity = '0';
                feature.style.transform = 'translateX(-20px)';
                feature.style.transition = 'all 0.5s ease';
            });
        }
        
        if (section.classList.contains('testimonials')) {
            const testimonials = section.querySelectorAll('.testimonial');
            testimonials.forEach(testimonial => {
                testimonial.style.opacity = '0';
                testimonial.style.transform = 'translateY(20px)';
                testimonial.style.transition = 'all 0.5s ease';
            });
        }
    });
}

// Function to create floating particles in the background
function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 30; // Increased count for more particles
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 10 + 3;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Set particle styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(203, 20, 20, 0.3);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: 0;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }
    
    // Add float animation to stylesheet
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            25% {
                transform: translateY(-70px) translateX(30px);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-120px) translateX(-20px);
                opacity: 0.6;
            }
            75% {
                transform: translateY(-180px) translateX(40px);
                opacity: 0.3;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add typing animation and interactivity to executor display
function animateExecutorDisplay() {
    const executorDisplay = document.querySelector('.executor-display');
    if (!executorDisplay) return; // Exit if element doesn't exist
    
    // Add cursor blinking effect
    const editorArea = document.querySelector('.editor-area');
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    cursor.innerHTML = '|';
    cursor.style.opacity = '1';
    cursor.style.color = '#fff';
    cursor.style.animation = 'blink 1s infinite';
    
    // Add blinking cursor animation
    const cursorStyle = document.createElement('style');
    cursorStyle.innerHTML = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(cursorStyle);
    
    // Add cursor to last line
    const lastCodeLine = editorArea.querySelector('.code-line:last-child');
    if (lastCodeLine) {
        lastCodeLine.appendChild(cursor);
    }
    
    // Add button interactions
    const execButtons = document.querySelectorAll('.exec-btn');
    execButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(203, 20, 20, 0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        btn.addEventListener('click', function() {
            // Execute button effect
            if (this.textContent === 'Execute') {
                // Flash green to indicate success
                editorArea.style.transition = 'all 0.3s ease';
                editorArea.style.boxShadow = '0 0 10px rgba(39, 201, 63, 0.5)';
                setTimeout(() => {
                    editorArea.style.boxShadow = '';
                }, 500);
                
                // Add execution message
                const executedMsg = document.createElement('div');
                executedMsg.classList.add('code-line');
                executedMsg.innerHTML = '<span style="color:#4CAF50;">-- Script executed successfully!</span>';
                editorArea.appendChild(executedMsg);
                editorArea.scrollTop = editorArea.scrollHeight;
            }
            
            // Clear button effect
            if (this.textContent === 'Clear') {
                // Reset to original code
                const originalLines = [
                    '<div class="code-line"><span class="code-comment">-- Zorara Premium Executor</span></div>',
                    '<div class="code-line"><span class="code-keyword">local</span> zorara = <span class="code-string">"Premium"</span></div>',
                    '<div class="code-line"></div>',
                    '<div class="code-line"><span class="code-keyword">function</span> <span class="code-function">Execute</span>()<span class="code-keyword">:</span></div>',
                    '<div class="code-line">    <span class="code-keyword">return</span> <span class="code-string">"Success!"</span></div>',
                    '<div class="code-line"><span class="code-keyword">end</span></div>'
                ];
                
                editorArea.innerHTML = originalLines.join('');
                const newLastLine = editorArea.querySelector('.code-line:last-child');
                if (newLastLine) {
                    newLastLine.appendChild(cursor);
                }
            }
            
            // Script Hub button effect
            if (this.textContent === 'Script Hub') {
                // Add some sample scripts
                const scriptHubCode = [
                    '<div class="code-line"><span class="code-comment">-- Zorara Script Hub</span></div>',
                    '<div class="code-line"><span class="code-comment">-- Available scripts:</span></div>',
                    '<div class="code-line"></div>',
                    '<div class="code-line"><span class="code-keyword">local</span> scripts = {</div>',
                    '<div class="code-line">    <span class="code-string">"Admin Commands"</span>,</div>',
                    '<div class="code-line">    <span class="code-string">"ESP Wallhack"</span>,</div>',
                    '<div class="code-line">    <span class="code-string">"Aimbot Pro"</span>,</div>',
                    '<div class="code-line">    <span class="code-string">"Speed Hack"</span>,</div>',
                    '<div class="code-line">}</div>'
                ];
                
                editorArea.innerHTML = scriptHubCode.join('');
                editorArea.appendChild(cursor);
            }
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
    
    // Add 3D effect on mouse move
    executorDisplay.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    executorDisplay.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateY(0deg) rotateX(0deg)';
        this.style.transition = 'all 0.5s ease';
    });
    
    executorDisplay.addEventListener('mouseenter', function() {
        this.style.transition = 'none';
    });
} 
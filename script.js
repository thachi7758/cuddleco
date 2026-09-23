document.addEventListener('DOMContentLoaded', () => {
    const notifyForm = document.getElementById('notifyForm');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const successMessage = document.getElementById('successMessage');

    notifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email) {
            // Simulate API call / form submission
            
            // UI Loading state
            btnText.textContent = 'Joining...';
            submitBtn.style.opacity = '0.8';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // UI Success state
                btnText.textContent = 'Notify Me';
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
                
                emailInput.value = '';
                
                successMessage.classList.add('show');
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
                
            }, 1500);
        }
    });
    
    // Add subtle parallax effect to the container
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const container = document.querySelector('.container');
        
        // Very subtle movement
        container.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
    });
});

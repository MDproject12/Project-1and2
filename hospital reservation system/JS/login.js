document.getElementById('toggle-text').addEventListener('click', function(event) {
    event.preventDefault();

    
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const toggleText = document.getElementById('toggle-text');
    const form = document.querySelector('.login-form');

    
    if (submitBtn.textContent === 'Submit') {
        formTitle.textContent = 'Sign In';
        submitBtn.textContent = 'Sign In';
        toggleText.textContent = 'Don\'t have an account? Sign Up';

        
        const emailField = document.createElement('div');
        emailField.classList.add('form-group', 'mb-3');
        emailField.innerHTML = `
            <label class="w-100">
                Email:
                <input class="w-100 p-1" type="email" required />
            </label>
        `;
        form.insertBefore(emailField, form.children[1]); 
    } else {
        formTitle.textContent = 'Sign Up';
        submitBtn.textContent = 'Submit';
        toggleText.textContent = 'Have An Account ?';

        
        const emailField = form.querySelector('input[type="email"]');
        if (emailField) {
            emailField.parentElement.parentElement.remove();
        }
    }
});

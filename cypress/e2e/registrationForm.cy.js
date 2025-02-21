describe('Registration Form Automation', () => {
    const url = 'http://127.0.0.1:5500/index.html'; // Change this if needed

    it('Launch the Web Page & Confirm Correct Page is Loaded', () => {
        cy.visit(url);
        cy.title().should('include', 'Registration Form');
    });

    it('Fill Form (Skip Last Name) & Validate Error', () => {
        cy.visit(url);
        cy.get('#firstName').type('John');
        cy.get('#email').type('john@example.com');
        cy.get('#phone').type('1234567890');
        cy.get('input[name="gender"][value="Male"]').check();
        cy.get('#terms').check();
        cy.get('button[type="submit"]').click();

        // Validate error message now checks for "⚠ Please fill out: Last Name"
        cy.get('#message').should('contain', '⚠ Please fill out: Last Name');

        cy.screenshot('missing-last-name-error');
    });

    it('Fill All Required Fields & Validate Successful Submission', () => {
        cy.visit(url);
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('john.doe@example.com');
        cy.get('#phone').type('9876543210');
        cy.get('input[name="gender"][value="Male"]').check();
        cy.get('#age').type('25');
        cy.get('#address').type('123 Main St');
        cy.get('#country').select('USA');
        cy.get('#password').type('secretPassword');
        cy.get('#confirmPassword').type('secretPassword');
        cy.get('#terms').check();
        cy.get('button[type="submit"]').click();

        // Validate success message
        cy.get('#message').should('contain', '✔ Registration Successful!');

        cy.screenshot('successful-submission');
    });
});

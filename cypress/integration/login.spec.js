import LoginPage from '../page.objects/login.page';
import {env} from '../page.objects/credentials.json';


describe('login user', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.navigate(env.urls.login);
    });
	
	it('should try to log in the user', () => {
	  loginPage.fillUsername(env.user.username);
      loginPage.fillPassword(env.user.password);
      loginPage.submit();
      loginPage.errorMessageElement.should('contain', "No account found with that username.");
    });
	
	xit('should check all page elements', () => {
		cy.get('body').find('img').should('have.attr', 'src').and('match', /svg/)
        cy.contains('QA Portal Login').should('be.visible', 'QA Portal Login')
        loginPage.usernameElement.should('be.visible')
        loginPage.passwordElement.should('be.visible')
        loginPage.submitButtonElement.should('be.visible')
	});

	xit('should show error when username and password are empty', () => {
        loginPage.submit();
        loginPage.errorMessageElement.should('contain', "Please enter username.");
		loginPage.errorMessageElement.should('contain', "Please enter your password.");
    });
	
	xit('should show error invalid username', () => {
        loginPage.fillUsername(env.user.username);
        loginPage.fillPassword(env.user.password);
        loginPage.submit();
        loginPage.errorMessageElement.should('contain', 'No account found with that username.');
        
    });

    xit('should show error email is required field', () => {
        loginPage.fillPassword(env.user.password);
        loginPage.submit();
        loginPage.errorMessageElement.should('contain', "Please enter username.");
	});

    xit('should show error password is required field', () => {
        loginPage.fillUsername(env.user.username);
        loginPage.submit();
        loginPage.errorMessageElement.should('contain', "Please enter your password.");
     });

 	 it('should a test-case that will fail because of unsuccessful login', () => {
        loginPage.fillUsername(env.user.username);
        loginPage.fillPassword(env.user.password);
        loginPage.submit();
        loginPage.errorMessageElement.should('not.be.visible', 'No account found with that username.');
        
    });
})
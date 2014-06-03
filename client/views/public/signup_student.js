/**
 * Created by swann on 15/05/2014.
 */

/**
 * Created by swann on 15/05/2014.
 */

Template.signupStudent.events({
    'submit #signup-form': function(event){
        event.preventDefault();

        // clear previous FormErrors before validating the form
        clearFormErrors();

        var email = $('#email').val().toLowerCase();
        var password = $('#password').val();
        var passwordconfirmation = $('#password-confirmation').val();
        if(!email || !password || !passwordconfirmation){
            throwFormError("Veuillez remplir tous les champs");
            return false;
        }
        if (password != passwordconfirmation) {
            throwFormError("Les deux mots de passes ne sont pas identiques");
            return false;
        }
        Accounts.createUser({
            email: email,
            password: password,
            profile: { type: D.TYPE.EXTERN_STUDENT }
        }, function(err){
            if (err) {
                throwFormError(ACCOUNTS_FR(err.reason));
            }
            else {
                console.log("ok");
                //Router.go('login');
            }
        });
    }
});
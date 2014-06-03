/**
 * Created by swann on 15/05/2014.
 */

Template.login.events({
    'submit #login-form' : function(event){

        // clear previous FormErrors before validating the form
        clearFormErrors();

        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        if(!email || !password){
            throwFormError("Veuillez remplir tous les champs");
            return false;
        }
        Meteor.loginWithPassword(email, password, function(err){
            if (err) {
                throwFormError(ACCOUNTS_FR(err.reason));
            }
            else {
                console.log("login OK");

                Stripe.setPublishableKey('pk_test_fPW5TkcXmsyDAmWlsTLmNPRp');

                console.log("Stripe.setPublishableKey");
                if (Router.current().route.name === 'login') {
                    // if we are on the login route, we want to redirect the user
                    var user = Meteor.user();
                    if (user.profile.type == D.TYPE.EXTERN_STUDENT)
                        return Router.go('studentDashboard');
                    else if (user.profile.type == D.TYPE.INSTRUCTOR)
                        return Router.go('instructorDashboard');

                }
            }
        });
    }
});
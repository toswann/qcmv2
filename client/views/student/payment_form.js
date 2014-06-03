/**
 * Created by swann on 30/05/2014.
 */

Template.studentPaymentForm.events({
    "click button" : function() {
        console.log("click button");
        var email = Meteor.user().profile.email;

        var testid;
        var cusid = Meteor.call('usersignup', email, function (error, result) {
            if (error) {
                console.log(err.message);
                return;
            }
            console.log(result);
            console.log("meteor call");
            testid = result;
            return (result);
        });
        console.log("outside call");
        console.log(testid);
        console.log(cusid);
    }
});
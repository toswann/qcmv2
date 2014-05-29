/**
 * Created by swann on 13/05/2014.
 */

Template.studentLayout.events({
    'click .logout' : function(event) {
        Meteor.logout();
        console.log("logout");
        Router.go("home");
    }
});
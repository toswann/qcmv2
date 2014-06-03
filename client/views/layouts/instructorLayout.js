/**
 * Created by swann on 13/05/2014.
 */

Template.instructorLayout.events({
    'click .logout' : function(event) {
        Meteor.logout();
        console.log("logout");
        Router.go("home");
    }
});
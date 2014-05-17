/**
 * Created by swann on 12/05/2014.
 */

Router.configure({
    layoutTemplate: 'publicLayout'
    //loadingTemplate: 'loading',
    //waitOn: function() { return [Meteor.subscribe('notifications')] }
});

Router.map(function() {
    this.route('login', {
        path: '/connexion'
    });

    this.route('signupStudent', {
        path: '/inscription/eleve'
    });

    this.route('forgotPassword', {
        path: '/passe_oublie'
    });

    this.route('home', {
        path: '/'
    });
});

Router.onBeforeAction(function() { clearFormErrors() });


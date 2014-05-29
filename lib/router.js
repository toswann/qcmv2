/**
 * Created by swann on 12/05/2014.
 */

Router.configure({
    //layoutTemplate: 'publicLayout'
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

    this.route('studentDashboard', {
        path: '/eleve'
    });

    this.route('home', {
        path: '/'
    });
});

// Define the layouts for your routes
var Layouts;
Layouts = [
    {
        // Layout definition
        layoutTemplate: 'publicLayout',
        // where to use
        routes: ['home', 'login', 'signupStudent', 'forgotPassword']
    },
    {
        // Layout definition
        layoutTemplate: 'studentLayout',
        // where to use
        routes: ['studentDashboard']
    }
];

// Apply the layout, if none is found the Iron Router nothing happens here
// and IR uses the standard ones
var IR_BeforeHooks;
IR_BeforeHooks = {
    loginRequired: function (pause) {
        console.log(Meteor.userId());
        if (!Meteor.userId()) {
            this.render('login');
            return pause();
        }
    },
    setLayout: function() {
        var l, _i, _len;
        for (_i = 0, _len = Layouts.length; _i < _len; _i++) {
            l = Layouts[_i];
            if (_.indexOf(l.routes, this.route.name) > -1) {

                //this.yieldTemplates = l.yieldTemplates;

                // this is for blaze-integration branch of Iron Router
                // for older branches of IR it should be this.setLayout(...)
                this.layout(l.layoutTemplate);
                return;
            }
        }
    }

};

// Use anywhere

Router.onBeforeAction(function() { clearFormErrors() });

Router.onBeforeAction(IR_BeforeHooks.setLayout);

Router.onBeforeAction(IR_BeforeHooks.loginRequired, {
    only: ['studentDashboard']
});



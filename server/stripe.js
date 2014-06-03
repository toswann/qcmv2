/**
 * Created by swann on 29/05/2014.
 */

// public pk_test_fPW5TkcXmsyDAmWlsTLmNPRp
var Future = Npm.require('fibers/future');
var Stripe = StripeAPI('sk_test_eSIm5vV9Y2qZvQxLZ0xK8L59');

Meteor.methods({

    usersignup: function(cusEmail){
        var fut = new Future();

        Stripe.customers.create(
            { email: cusEmail },
            function(err, customer) {
                if (err) {
                    console.log(err);
                    fut.return();
                }
                console.log(customer.id);
                fut.return(customer.id);
            }
        );
        return fut.wait();
    }
});
/**
 * Created by swann on 16/05/2014.
 */

FormErrors = new Meteor.Collection(null);

throwFormError = function(message) {
    FormErrors.insert({message: message, seen: false})
}

clearFormErrors = function() {
    FormErrors.remove({seen: true});
}
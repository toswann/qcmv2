/**
 * Created by swann on 16/05/2014.
 */

Template.formErrors.helpers({
    hasErrors: function() {
      return FormErrors.find().count() > 0 ? true : false;
    },
    errors: function() {
        return FormErrors.find();
    }
});

Template.formError.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        FormErrors.update(error._id, {$set: {seen: true}});
    });
};
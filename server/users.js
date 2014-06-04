/**
 * Created by swann on 16/05/2014.
 */

Accounts.onCreateUser(function(options, user){
    var userProperties = {
        profile: options.profile || {}
    };
    user = _.extend(user, userProperties);

    if (options.email)
        user.profile.email = options.email;

    if (options.profile.type == D.TYPE.EXT_STUDENT) {
        user.profile.state = D.STATE.EXT_STUDENT_TRIAL;
    }
    else if (options.profile.type == D.TYPE.ORG_STUDENT) {

    }
    else if (options.profile.type == D.TYPE.INSTRUCTOR) {
        user.profile.state = D.STATE.INSTRUCTOR_TRIAL;
    }
    else if (options.profile.type == D.TYPE.ADMIN) {

    }
    else {
        throw new Meteor.Error(403, "Méthode de requête non autorisée.");
    }
    return user;
});




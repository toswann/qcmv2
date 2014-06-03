/**
 * Created by swann on 16/05/2014.
 */
D = {
    TYPE : {
        EXT_STUDENT  : 1,
        ORG_STUDENT  : 2,
        INSTRUCTOR   : 3,
        ADMIN        : 4
    },
    INSTRUCTOR : {
        CLASSIC         : 1,
        ADMIN           : 2
    },
    STATE : {
        EXT_STUDENT_TRIAL           : 0,
        EXT_STUDENT_NO_LICENCE      : 1,
        EXT_STUDENT_LICENCE_VALID   : 2,
        EXT_STUDENT_LICENCE_EXPIRED : 3,

        ORG_STUDENT_LICENCE_VALID   : 4,
        ORG_STUDENT_LICENCE_EXPIRED : 5,

        INSTRUCTOR_TRIAL            : 6,
        INSTRUCTOR_NO_LICENCE       : 7,
        INSTRUCTOR_LICENCE_VALID    : 8,
        INSTRUCTOR_LICENCE_EXPIRED  : 9
    }
}
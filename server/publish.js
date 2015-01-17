/**
 * Created by devin on 1/17/15.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
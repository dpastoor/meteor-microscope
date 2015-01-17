/**
 * Created by devin on 1/15/15.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
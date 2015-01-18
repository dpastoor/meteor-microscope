Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
// :_id syntax says match any route of the form /posts/xyz/ and
//      to put whatever it finds in 'xyz' spot inside an _id property in the routers params array
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
    // from routing chapter of discover meteor
    //Remember that findOne returns a single post that matches a query,
    //and that providing just an id as an argument is a shorthand for {_id: id}.
});
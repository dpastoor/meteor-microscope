/**
 * Created by devin on 1/17/15.
 */
// this template will return the domain (hostname) given a url and will allow
// the {{domain}} in posts_list.html to be populated
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
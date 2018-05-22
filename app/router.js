import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route("lessons");
    this.route("lesson", { path: "/lessons/:lesson_id" });
    // this.route("lessons", { path: "/lessons" }, function() {
    //     this.route("lesson", { path: "/:lesson_id" });
    // });
    // https://stackoverflow.com/questions/32103588/undestanding-ember-route-hooks-to-redirect
    // https://emberjs.com/api/ember/2.15/classes/Ember.Route/methods/deserialize?anchor=deserialize&show=inherited%2Cprotected%2Cprivate%2Cdeprecated
    // https://emberigniter.com/5-essential-ember-concepts/
});

export default Router;

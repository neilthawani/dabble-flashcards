import Ember from "ember";

export default Ember.Route.extend({
    actions: {
        goToLesson: function(number) {
            this.transitionTo("lesson", number);
        }
    }
});

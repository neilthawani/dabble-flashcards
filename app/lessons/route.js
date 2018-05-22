import Ember from "ember";
import LessonOne from "dabble/fixtures/1";

export default Ember.Route.extend({
    setupController: function(controller, model) {
        // xhr to get lesson plan data
        var lessons = [LessonOne];

        controller.set("lessons", lessons);
    },
    actions: {
        goToLesson(number) {
            this.transitionTo("lesson", number);
        },
    }
});

import Ember from "ember";

export default Ember.Route.extend({
    model: function(params) {
        // console.log("model", params);
        return parseInt(params.lesson_id, 10);
    },
    setupController: function(controller, model) {
        controller.set("lessonId", model);
    },
    // deserialize: function(model) {
    //     return parseInt(model.lesson_id, 10);
    // },
    actions: {
        backToLessonsList() {
            this.transitionTo("application");
        }
    }
});

// Conversations, Phrases, Vocabulary all have difficulty ratings, applied by the user
// If the self-rated difficulty is higher, then it goes to a location in the pile of flashcards...
// So each card difficulty is high by default.
// And the self-rated difficulty re-shuffles the deck accordingly, insert where appropriate.

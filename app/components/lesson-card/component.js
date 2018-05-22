import Ember from "ember";

export default Ember.Component.extend({
    classNames: ["lesson-week-outer"],

    lesson: null,
    number: Ember.computed.alias("lesson.id"),

    click: function() {
        this.send("goToLesson", this.get("number"));
    },

    actions: {
        goToLesson(number) {
            this.sendAction("goToLesson", number);
        }
    }
});

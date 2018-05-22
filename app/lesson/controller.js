import Ember from "ember";

export default Ember.Controller.extend({
    lessonsController: Ember.inject.controller("lessons"),
    lessons: Ember.computed.alias("lessonsController.lessons"),
    activeLessonIndex: Ember.computed.oneWay("lessons.activeLessonIndex"),
    activeLesson: Ember.computed("lessons", "lessons.length", "activeLessonIndex", function() {
        var lessons = this.get("lessons"),
            activeLessonIndex = this.get("activeLessonIndex"),
            activeLesson = lessons && lessons.findBy("id", activeLessonIndex);

        return activeLesson;
    }),
    activeKey: null,
    activeVocabularyList: Ember.computed("activeLesson", "activeLesson.@each.dialogues",
        "activeLesson.@each.phrases", "activeLesson.@each.vocabulary", "activeKey", function() {
        var activeLesson = this.get("activeLesson"),
            activeKey = this.get("activeKey");

        return activeLesson && activeLesson[activeKey];
    }),

    actions: {
        backToLesson: function() {
            this.set("activeKey", null);
        },
        displayVocabularyList: function(key) {
            this.set("activeKey", key);
        },
    }
});

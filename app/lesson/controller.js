import Ember from "ember";

export default Ember.Controller.extend({
    // queryParams: ['isAdding'],
    lessonId: null,

    application: Ember.inject.controller(),
    lessons: Ember.computed.alias("application.lessons"),
    // activeLessonIndex: Ember.computed.oneWay("lessons.activeLessonIndex"),
    // activeLessonIndex: null,
    activeLesson: Ember.computed("lessons", "lessons.length", "lessonId", function() {
        var lessons = this.get("lessons"),
            lessonId = this.get("lessonId"),
            activeLesson = lessons && lessons.findBy("id", lessonId);

        return activeLesson;
    }),
    // activeKey: null,
    // activeVocabularyList: Ember.computed("activeLesson", "activeLesson.@each.dialogues",
    //     "activeLesson.@each.phrases", "activeLesson.@each.vocabulary", "activeKey", function() {
    //     var activeLesson = this.get("activeLesson"),
    //         activeKey = this.get("activeKey");
    //
    //     return activeLesson && activeLesson[activeKey];
    // }),
    //
    // actions: {
    //     backToLesson: function() {
    //         this.set("activeKey", null);
    //     },
    //     displayVocabularyList: function(key) {
    //         this.set("activeKey", key);
    //     },
    // }
});

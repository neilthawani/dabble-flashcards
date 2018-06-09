import Ember from "ember";

export default Ember.Controller.extend({
    lessonId: 0,
    lessons: Ember.computed({
        get: function() {
            return JSON.parse(window.localStorage.getItem("lessons")) || [];
        },
        set: function(key, value) {
            window.localStorage.setItem("lessons", JSON.stringify(value));
            return value;
        }
    }),
    activeLessonId: null,

    canDisplayLessonsList: Ember.computed("lessons", "lessons.length", "currentRouteName",
        "isAddingLesson", function() {
        return !Ember.isEmpty(this.get("lessons")) &&
                this.get("currentRouteName") === "index" &&
                !this.get("isAddingLesson");
    }),

    actions: {
        addLesson: function() {
            this.incrementProperty("lessonId");
            this.toggleProperty("isAddingLesson");
        },
        createLesson: function(lesson) {
            var lessons = this.get("lessons") || [];

            lessons.push(lesson);

            this.set("lessons", lessons);
            this.set("isAddingLesson", false);
        },
        confirmRemoveLesson: function(number) {
            this.send("removeLesson", number);
        },
        removeLesson: function(number) {
            var lessons = this.get("lessons"),
                lessonToRemove = lessons.findBy("id", number);

            lessons.removeObject(lessonToRemove);

            this.set("lessons", lessons);
        }
    }
});

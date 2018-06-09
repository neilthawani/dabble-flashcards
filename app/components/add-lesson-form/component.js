import Ember from "ember";
import FileUtils from "dabble/utils/files";
import Config from "dabble/config/config";

export default Ember.Component.extend({
    isAddingLesson: false,
    lessonId: null,

    lesson: Ember.computed("lessonId", {
        get: function() {
            return {
                id: this.get("lessonId"),
                name: "",
                language: "",
                cards: [],
            };
        },
        set: function(key, value) {
            return value;
        }
    }),
    languageOptions: Config.languageOptions,

    errorMessage: Ember.computed("lesson", "lesson.name", "lesson.cards.length", "lesson.cards.[]", function() {
        var lesson = this.get("lesson") || {},
            errorMessage = null;

        if (lesson && !lesson.name) {
            errorMessage = "No name";
        }

        if (lesson && !lesson.cards) {
            errorMessage = "No cards";
        }

        return errorMessage;
    }),

    setFileInfo: function(parsedFile, context) {
        console.debug("Parsed file:", parsedFile);

        if (parsedFile) {
            context.set("lesson.cards", parsedFile);
        }
    },

    actions: {
        createLesson: function() {
            var lesson = this.get("lesson");

            this.sendAction("createLesson", lesson);
        },
        selectFile: function(event) {
            var files = event && event.target && event.target.files,
                firstFile = files && files[0];

            FileUtils.parseCsv(firstFile, this.setFileInfo, this);
        },
        setLanguage: function(language) {
            this.set("lesson.language", language.value);

            var languageOptions = this.get("languageOptions");
            console.debug("Language set:", languageOptions.findBy("value", language).label);
        }
    }
});

import Ember from "ember";

export default Ember.Component.extend({
    classNames: ["lesson-options"],

    actions: {
        displayVocabularyList: function(key) {
            this.sendAction("displayVocabularyList", key);
        }
    }
});

import Ember from "ember";
import config from "dabble/config/config";

export default Ember.Component.extend({
    classNameBindings: ["flashCardClass", "isInactiveCard:hidden"],

    flashCardClass: Ember.computed("isConversation", "showAllCards", function() {
        if (this.get("showAllCards") && this.get("isConversation")) {
            return "flash-card-container-conversation";
        }

        if (this.get("showAllCards")) {
            return "flash-card-container";
        }

        return "flash-card-container-active";
    }),

    item: null,
    index: null,
    activeIndex: 0,
    showAllCards: false,

    isConversation: Ember.computed.gt("item.length", 1),
    isInactiveCard: Ember.computed("index", "activeIndex", "showAllCards", function() {
        var isInactiveCard = false;

        if (!this.get("showAllCards")) {
            isInactiveCard = this.get("index") !== this.get("activeIndex");
        }

        return isInactiveCard;
    }),

    showTranslation: false,
    untranslatedWordOrPhrase: Ember.computed.or("item.phrase", "item.word"),
    translatedWordOrPhrase: Ember.computed.alias("item.translation"),
    displayWord: Ember.computed("showTranslation", "untranslatedWordOrPhrase", "translatedWordOrPhrase", function() {
        return this.get("showTranslation") ? this.get("translatedWordOrPhrase") : this.get("untranslatedWordOrPhrase");
    }),

    textToSpeechURL: Ember.computed("displayWord", function() {
        var displayWord = this.get("displayWord"),
            url = `${config.BASE_URL}${displayWord}`;

        return url;
    }),

    actions: {
        toggleShowTranslation: function() {
            this.toggleProperty("showTranslation");
        }
    }
});

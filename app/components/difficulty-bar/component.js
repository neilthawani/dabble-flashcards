import Ember from "ember";

export default Ember.Component.extend({
    classNameBindings: ["isHidden:hidden"],

    item: null,
    index: null,
    activeIndex: 0,
    showAllCards: false,

    ratings: [{
        label: "Very Hard",
        value: 5,
    }, {
        label: "Hard",
        value: 4,
    }, {
        label: "Moderate",
        value: 3,
    }, {
        label: "Easy",
        value: 2,
    }, {
        label: "Very Easy",
        value: 1,
    }, ],

    isHidden: Ember.computed("index", "activeIndex", "showAllCards", function() {
        return !(this.get("index") === this.get("activeIndex")) || this.get("showAllCards");
    }),

    actions: {
        reinsertCard: function(ratingValue) {
            this.sendAction("reinsertCard", ratingValue, this.get("item"));
        }
    }
});

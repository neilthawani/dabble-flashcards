import Ember from "ember";

export default Ember.Component.extend({
    activeVocabularyList: null,

    countdownTotal: Ember.computed("activeVocabularyList", "activeVocabularyList.length", function() {
        var activeVocabularyListLength = this.get("activeVocabularyList.length");

        return activeVocabularyListLength * 3;
    }),
    countdownCount: 0,
    countdownPercentage: Ember.computed("countdownCount", "countdownTotal", function() {
        var countdownPercentage = (100 * this.get("countdownCount") / this.get("countdownTotal")).toFixed(2);
        return Ember.String.htmlSafe(`width:${countdownPercentage}%`);
    }),
    score: Ember.computed("activeVocabularyList", "activeVocabularyList.length", "activeVocabularyList.@each.difficultyLevel", function() {
        var activeVocabularyList = this.get("activeVocabularyList"),
            maxScore = activeVocabularyList && activeVocabularyList.length,
            currentScore = activeVocabularyList && activeVocabularyList.reduce((prev, item) => {
                prev += item.difficultyLevel;
                return prev;
            }, 0),
            score = (100 * maxScore / currentScore).toFixed(0);

        return score;
    }),
    isLessonOver: Ember.computed("countdownCount", "countdownTotal", function() {
        return this.get("countdownCount") === this.get("countdownTotal");
    }),

    activeIndex: 0,
    showAllCards: false,

    actions: {
        backToLesson() {
            this.sendAction("backToLesson");
        },
        repeatLesson: function() {
            var shuffle = function(a) {
                for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
                }

                return a;
            };

            var activeVocabularyList = this.get("activeVocabularyList"),
                newActiveVocabularyList = shuffle(activeVocabularyList);

            this.set("countdownCount", 0);
            this.set("isLessonOver", false);
            this.set("activeVocabularyList", newActiveVocabularyList);
        },
        toggleShowAllCards() {
            this.toggleProperty("showAllCards");
        },
        reinsertCard: function(newDifficultyLevel, item) {
            var activeVocabularyList = this.get("activeVocabularyList"),
                activeItemIndex = activeVocabularyList.indexOf(item),
                insertLocation = activeVocabularyList.length - 1 - activeVocabularyList.slice().reverse().findIndex((obj) => obj.difficultyLevel == newDifficultyLevel),
                activeIndex = this.get("activeIndex"),
                countdownCount = this.get("countdownCount");

            Ember.set(item, "difficultyLevel", newDifficultyLevel);
            activeVocabularyList.splice(activeItemIndex, 1);

            if (!insertLocation) {
                activeVocabularyList.push(item);
            } else {
                activeVocabularyList.splice(insertLocation, 0, item);
            }

            if (activeIndex === activeVocabularyList.length - 1) {
                activeIndex = -1;
            }

            this.set("activeIndex", ++activeIndex);
            this.set("countdownCount", ++countdownCount);

            if (this.get("countdownCount") === this.get("countdownTotal")) {
                this.set("isLessonOver", true);
            }
        }
    }
});

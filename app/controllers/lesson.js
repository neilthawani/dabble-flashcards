import Ember from "ember";
import Config from "dabble/config/config";

export default Ember.Controller.extend({
    baseParams: Ember.computed("params", "params.length", function() {
        var params = this.get("params");

        return params.reduce((prev, param) => {
            return `${prev}${param.key}=${param.value}&`;
        }, "");
    }),

    staticParams: Config.staticParams,

    dynamicParams: Ember.computed("dynamicParamsOptions", "dynamicParamsOptions.length", function() {
        var dynamicParams = Config.dynamicParams,
            dynamicParamsOptions = this.get("dynamicParamsOptions") || [],
            mappedDynamicParams = dynamicParamsOptions.map((paramKeyValuePair) => {
                var key = dynamicParams.findBy("label", paramKeyValuePair.key);
            });

        // TODO: This next.
        // return dynamicParams.map((param) => {
        //     return param.key;
        // });
    }),
    dynamicParamsOptions: [
        // { key, value - selectedLanguageValue: input language of src (hl) },
        // { key, value - displayWord: word/phrase to read (src) }
    ],
    builtDynamicParams: Ember.computed("dynamicParams", "dynamicParams.length", function() {
        var dynamicParams = this.get("dynamicParams") || [],
            builtDynamicParams = dynamicParams.map((param) => {
                return `${param}=${this.get(param)}&`;
            });

        return builtDynamicParams;
    }),

    buildUrl: function(flashCard) {
        var baseUrl = this.get("baseUrl"),
            baseParams = this.get("baseParams"),
            languageParams = this.get("languageParams");

        var url = `${config.BASE_URL}${displayWord}`;
    }
});

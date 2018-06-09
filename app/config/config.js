// ?key=${API_KEY}&hl=${LANGUAGE}&f=${FORMAT}&src=`
import Ember from "ember";

export default {
    // NOTE: Not the real API key.
    // apiKey: "1647f77838ad4d0791568354e89d14e7",
    audioFormat: "48khz_16bit_stereo",

    baseUrl: `http://api.voicerss.org/?`,
    staticParams: Ember.computed("apiKey", "audioFormat", function() {
        return [{
            key: "key",
            value: this.get("apiKey")
        }, {
            key: "f",
            value: this.get("audioFormat")
        }];
    }),
    dynamicParams: [{
        key: "hl", // input language of src
        label: "selectedLanguageValue",
        value: null
    }, {
        key: "src", // word/phrase to read
        label: "displayWord",
        value: null
    }],
};

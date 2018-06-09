import Papa from "npm:papaparse";

var parseCsv = function(file, callback, context) {
    Papa.parse(file, {
        complete: function(results) {
            console.debug("Read csv:", results);
            results = results && results.data;
            var ret;


            try {
                ret = results.map((row) => {
                    return {
                        word: row[0],
                        translation: row[1]
                    }
                });

                return callback(ret, context);
            } catch(error) {
                return error;
            }            
        },
        download: false
    });
};

export default {
    parseCsv: parseCsv
};

function cleanObject(obj) {
    if(obj) {
        for(key in obj) {
            // console.log("Outside",key,":" ,obj[key], typeof(obj[key]));
            if(obj[key] == null || obj[key] == ""){
                delete obj[key];
            }
            else if(typeof(obj[key]) == 'object'){
                cleanObject(obj[key]);
            }
        }
    }
    console.log(obj);
}

data = {
    "a": "something",
    "b": "",
    "c": null,
    "d": [1,2,"g",""],
    "e": 1,
    "f": {
        "g": null,
        "h": 2,
    },
    "g" : {
        "a": "something",
        "b": "",
        "c": null,
        "d": [1,2,"g","", null, {
            "a": "something",
            "b": "",
            "c": null,
            "d": [1,2,"g",""],
            "e": 1,
            "f": {
                "g": null,
                "h": 2,
            }
        }],
        "e": 1,
        "f": {
            "g": null,
            "h": 2,
        } 
    }
};
cleanObject(data);

const responses = [
    {
        "name": "Ahmed Johnson",
        "photo": "https://wrestlingrecaps.files.wordpress.com/2017/02/tumblr_n2xi7ipdey1rg89a6o1_250.jpg?w=225&h=300",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        "name": "Hulk Hogan",
        "photo": "https://static.tvtropes.org/pmwiki/pub/images/HulkHogan.jpg",
        "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        "name": "Sgt. Slaughter",
        "photo": "https://sportsdaydfw.imgix.net/1454625260-47_SCANS16.jpg",
        "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    },
    {
        "name": "John Cena",
        "photo": "https://cache.desktopnexus.com/thumbseg/810/810854-bigthumbnail.jpg",
        "scores": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
        "name": "Bill Goldberg",
        "photo": "http://www.bonnerfideradio.com/wp-content/uploads/2016/11/Goldberg-gold-belt.png",
        "scores": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    },
    {
        "name": "Steve Austin",
        "photo": "https://wwenetworkplaylists.files.wordpress.com/2014/05/austin_icbelt.jpg",
        "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        "name": "Bret Hart",
        "photo": "https://i.ebayimg.com/thumbs/images/g/tCQAAOSwroFbkFIC/s-l225.jpg",
        "scores": [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 2]
    },
    {
        "name": "King Booker",
        "photo": "https://i.pinimg.com/originals/57/dc/37/57dc37f7109f84c6e661b7cfbd49cda3.jpg",
        "scores": [ 3, 4, 5, 4, 3, 2, 1, 1, 2, 1]
    },
    {
        "name": "Ric Flair",
        "photo": "https://img.bleacherreport.net/img/images/photos/002/978/431/2462de1dd3145640c92480933c2c6206_crop_exact.jpg?w=1200&h=1200&q=75",
        "scores": [ 4, 5, 5, 4, 3, 2, 1, 1, 2, 3]
    },
    {
        "name": "Becky Lynch",
        "photo": "https://i.pinimg.com/originals/52/33/47/5233471b7c5af81796a6796813902207.jpg",
        "scores": [ 5, 1, 4, 2, 3, 2, 4, 1, 5, 1]
    },
    {
        "name": "Chris Jericho",
        "photo": "https://wwfoldschool.com/wp-content/uploads/2017/03/Chris-Jericho.jpg",
        "scores": [ 5, 4, 3, 4, 5, 4, 3, 4, 5, 4]
    },
];

const body = [    {
    "name": "Chris Jericho",
    "photo": "https://wwfoldschool.com/wp-content/uploads/2017/03/Chris-Jericho.jpg",
    "scores": [ 5, 4, 3, 4, 5, 4, 3, 4, 5, 4]
},
];

const matchEmp = function (newEmp, empList) {
    const compatibility = [];
    for (let i=0; i<empList.length; i++) {
        const scoreDiffArr = [];
        for (let j=0; j<empList[i].scores.length; j++) {
            const diff = Math.abs(newEmp.scores[j] - empList[i].scores[j]);
            if (diff > 0) {
                scoreDiffArr.push(diff);
            };
        };
        const sum = scoreDiffArr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);
        const scoreDiff = sum / scoreDiffArr.length;
        compatibility.push(scoreDiff);
    };
    console.log(compatibility);
};

matchEmp(body, responses);
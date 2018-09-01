var movies = [

      {
        title: "In Bruges",
        rating: 5,
        seen: true
      },
    

    {
        title: "Frozen",
        rating: 4.5,
        seen: false
    },

    {
        title: "Mad Max Fury Road",
        rating: 5,
        seen: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        seen: false
    }
]
    firstSeenString = "You have watched ";
    trueString = "You have seen ";
    falseString = "You have not seen ";
    starString = " stars";
    firstObjectIndex = 0;

for (var i = 0; i < movies.length; i++) {
    if (i === firstObjectIndex) {
        console.log(firstSeenString + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + starString);
    }
    else if (movies[i].seen === true) {
        console.log(trueString + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + starString);
    } else {
        console.log(falseString + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + starString);
    }

}
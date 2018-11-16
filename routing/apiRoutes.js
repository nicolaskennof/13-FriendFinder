var friends = require("../app/data/friends");

module.exports = function (app) {
    console.log("estoy aqui");
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);

        var totalDifference = friends.map(function(friend) {
            var total = 0;
            for (i = 0; i < friend.scores.length; i++) {
                total += Math.abs(friend.scores[i] - newFriend.scores[i]);
            };
            return total;
        })

        var minDifference = Math.min(...totalDifference);
        console.log(minDifference);

        var position = totalDifference.indexOf(minDifference);
        console.log(position);

        var match = friends[position];
        console.log(match);
        
        friends.push(newFriend);
        res.json(match);
    });
};
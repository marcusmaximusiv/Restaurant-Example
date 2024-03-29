// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "john doe",
        phoneNumber: "922-233-4444",
        email: "go@gmail.com",
        id: "732423"
    }
];

var waitlist = [
    {
        name: "jane doe",
        phoneNumber: "922-233-4444",
        email: "me@gmail.com",
        id: "First"
    }
]


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// Displays a single character, or returns false
//   app.get("/api/table/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
// }

// return res.json(false);
//   });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newCharacter);

//     characters.push(newCharacter);

//     res.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

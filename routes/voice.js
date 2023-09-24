const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const randomstring = require("randomstring");

const gtts = require("gtts");

router.post("/", (req, res) => {
    let text = req.body.text;
    let language = req.body.language;

    try {
        const voice = new gtts(text, language);
        const filename = path.resolve(`./result/${text?.slice(0, 6)}.mp3`);

        if (fs.existsSync(filename)) {
            voice.save(`./result/${text?.slice(0, 6)}-${randomstring.generate(7)}.mp3`, (err, result) => {
                if (err) {
                    console.log(err);
                }

                res.send("Success");
            });
        } else {
            voice.save(`./result/${text?.slice(0, 6)}.mp3`, (err, result) => {
                if (err) {
                    console.log(err);
                }

                res.send("Success");
            });
        }
    } catch (error) {
        res.status(500).end();
    }
});

module.exports = router;

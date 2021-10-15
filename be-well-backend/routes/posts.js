const router = require('express').Router()

router.get("/", (req, res) => {
    console.log("Post page!")
})

module.exports = router
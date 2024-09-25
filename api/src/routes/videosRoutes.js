const express = require("express");
const router = express.Router();

const videosControllers = require("../controllers/videosControllers");

router.get("/", videosControllers.index);

router.get("/:id",videosControllers.show);

router.post("/", videosControllers.store);

router.put("/:id", videosControllers.update);

router.delete("/:id", videosControllers.delete);

module.exports = router;

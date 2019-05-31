const router = require('express').Router()

const { getMonsterById, getMonster } = require("../../controllers/moster-controller");

// /api/monsters?cr=""&id=""
router
  .route("/")
  .get(getMonsterByCR);

router
  .route("/:id")
  .get(getMonsterById);

module.exports = router;
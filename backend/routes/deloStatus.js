const express = require("express");
const router = express.Router();

const { shouldActivateDeloTime } = require("../utils/deloWindowEvaluator");

router.post("/delo-status", (req, res) => {
  const { carbonIntensity, soc, timeOfDay, strategy } = req.body;

  const isCharging = strategy === "CHARGING";

  const result = shouldActivateDeloTime({
    currentTime: new Date(2000, 0, 1, timeOfDay), // mock Date based on hour
    carbonIntensity,
    soc,
    isCharging,
    strategy,
  });

  return res.json({ deloActive: result });
});

module.exports = router;

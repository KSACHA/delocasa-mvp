function shouldActivateDeloTime(params) {
  const { currentTime, carbonIntensity, soc, isCharging, strategy } = params;

  if (strategy === "CHARGING") {
    return isCharging && carbonIntensity <= 300 && soc < 95;
  }

  if (strategy === "DISCHARGING") {
    const hour = currentTime.getHours();
    return !isCharging && carbonIntensity <= 300 && soc > 40 && hour >= 18 && hour <= 22;
  }

  if (strategy === "FIXED_WINDOW") {
    const hour = currentTime.getHours();
    return hour >= 18 && hour <= 21;
  }

  return false;
}

// ✅ CommonJS export
module.exports = { shouldActivateDeloTime };

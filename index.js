"use strict"

const convertColour = require("color-convert")

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	const [hue, saturation, value] = convertColour.hex.hsv(input)

	return [Math.round(hue / 360 * 100), saturation, value]
}

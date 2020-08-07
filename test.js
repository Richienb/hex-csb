const test = require("ava")
const hexCsb = require(".")

test("main", t => {
	t.deepEqual(hexCsb("#FFFFFF"), [0, 0, 100])
	t.deepEqual(hexCsb("#000000"), [0, 0, 0])
	t.deepEqual(hexCsb("#FFD800"), [14, 100, 100])
})

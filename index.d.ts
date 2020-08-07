/**
Convert a HEX colour to Scratch CSB.
@param input The HEX code to convert.
@example
```
const hexCsb = require("hex-csb");

hexCsb("FFFFFF");
//=> [0, 0, 100]

hexCsb("000000");
//=> [0, 0, 0]

hexCsb("#FFD800");
//=> [14, 100, 100]
```
*/
declare function hexCsb(input: string): [number, number, number]

export = hexCsb

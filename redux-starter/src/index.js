import { compose, pipe } from 'lodash/fp';

let input = "    javascript    "

let output = "div" + input.trim() + "/div"

const trim = str => str.trim();
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = type => str => `<${type}>${str}</${type}>`;

// const wrapInDiv = str => `<div>${str}</div>`
// const wrapInSpan = str => `<span>${str}</span>`

const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"))
transform(input)

const result = wrapInDiv(toLowerCase(trim(input)))
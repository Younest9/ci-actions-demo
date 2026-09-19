import { formatGreeting } from "./lib.js";

const name = process.argv[2] ?? "CI";
console.log(formatGreeting(name));

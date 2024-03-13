import { env } from "node:process"

const email = env.EMAIL
const port = env.PORT

console.log({email, port})

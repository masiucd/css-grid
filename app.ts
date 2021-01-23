// Requiring modules
import { Application, Router, send } from "https://deno.land/x/oak/mod.ts"
import { viewEngine, engineFactory, adapterFactory } from "https://deno.land/x/view_engine/mod.ts"

const app = new Application()
const router = new Router()

const ejsEngine = await engineFactory.getEjsEngine()
const oakAdapter = await adapterFactory.getOakAdapter()

app.use(async (ctx, next) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
  })
  next()
})

app.use(viewEngine(oakAdapter, ejsEngine))

router.get("/", (ctx, next) => {
  // @ts-ignore
  ctx.render("index.ejs", { data: { msg: "World" } })
})

app.use(router.routes())
app.use(router.allowedMethods())

console.log("App is listening to port: 8000")
await app.listen({ port: 8000 })

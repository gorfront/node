import express from "express";
import cors from "cors";
import { applyTrpcToExpressApp } from "./lib/trpc.ts";
import { trpcRouter } from "./router/index.ts";
import { AppContext, createAppContext } from "./lib/ctx.ts";
import { applyPassportToExpressApp } from "./lib/pasport.ts";

void (async () => {
  let ctx: AppContext | null = null;
  try {
    ctx = createAppContext();
    const expressApp = express();
    expressApp.use(cors());
    expressApp.get("/ping", (req, res) => {
      res.send("pong");
    });
    applyPassportToExpressApp(expressApp, ctx);
    await applyTrpcToExpressApp(expressApp, ctx, trpcRouter);
    expressApp.listen(3200, () => {
      console.info("Listening at http://localhost:3200");
    });
  } catch (error) {
    console.error(error);
    await ctx?.stop();
  }
})();

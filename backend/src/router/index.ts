import { trpc } from "../lib/trpc.ts";
import { getIdeaTrpcRoute } from "./getIdea/index.ts";
import { getIdeasTrpcRoute } from "./getIdeas/index.ts";

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;

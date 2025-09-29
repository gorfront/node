import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { trpc } from "../lib/trpc.ts";
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/') + '/index.ts'}'`)
import { createIdeaTrpcRoute } from "./createIdea/index.ts";
import { getIdeaTrpcRoute } from "./getIdea/index.ts";
import { getIdeasTrpcRoute } from "./getIdeas/index.ts";
import { getMeTrpcRoute } from "./getMe/index.ts";
import { signInTrpcRoute } from "./signIn/index.ts";
import { signUpTrpcRoute } from "./signUp/index.ts";
import { updateIdeaTrpcRoute } from "./updateIdea/index.ts";
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createIdea: createIdeaTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  getMe: getMeTrpcRoute,
  signIn: signInTrpcRoute,
  signUp: signUpTrpcRoute,
  updateIdea: updateIdeaTrpcRoute,
  // @endindex
});

export type TrpcRouter = typeof trpcRouter;
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>;
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>;

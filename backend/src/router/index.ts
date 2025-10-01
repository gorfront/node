import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { trpc } from "../lib/trpc.ts";
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/') + '/index.ts'}'`)
import { getMeTrpcRoute } from "./auth/getMe/index.ts";
import { signInTrpcRoute } from "./auth/signIn/index.ts";
import { signUpTrpcRoute } from "./auth/signUp/index.ts";
import { updateProfileTrpcRoute } from "./auth/updateProfile/index.ts";
import { createIdeaTrpcRoute } from "./ideas/createIdea/index.ts";
import { getIdeaTrpcRoute } from "./ideas/getIdea/index.ts";
import { getIdeasTrpcRoute } from "./ideas/getIdeas/index.ts";
import { updateIdeaTrpcRoute } from "./ideas/updateIdea/index.ts";
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  getMe: getMeTrpcRoute,
  signIn: signInTrpcRoute,
  signUp: signUpTrpcRoute,
  updateProfile: updateProfileTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  updateIdea: updateIdeaTrpcRoute,
  // @endindex
});

export type TrpcRouter = typeof trpcRouter;
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>;
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>;

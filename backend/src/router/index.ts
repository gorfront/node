import { trpc } from "../lib/trpc.ts";
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/') + '/index.ts'}'`)
import { createIdeaTrpcRoute } from "./createIdea/index.ts";
import { getIdeaTrpcRoute } from "./getIdea/index.ts";
import { getIdeasTrpcRoute } from "./getIdeas/index.ts";
import { signInTrpcRoute } from "./signIn/index.ts";
import { signUpTrpcRoute } from "./signUp/index.ts";
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createIdea: createIdeaTrpcRoute,
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  signIn: signInTrpcRoute,
  signUp: signUpTrpcRoute,
  // @endindex
});

export type TrpcRouter = typeof trpcRouter;

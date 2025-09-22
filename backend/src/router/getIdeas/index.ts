import _ from "lodash";
import { ideas } from "../../lib/ideas.ts";
import { trpc } from "../../lib/trpc.ts";

export const getIdeasTrpcRoute = trpc.procedure.query(() => {
  return { ideas: ideas.map((idea) => _.pick(idea, ["nick", "name", "description"])) };
});

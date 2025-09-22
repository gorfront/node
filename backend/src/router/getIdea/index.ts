import { z } from "zod";
import { ideas } from "../../lib/ideas.ts";
import { trpc } from "../../lib/trpc.ts";

export const getIdeaTrpcRoute = trpc.procedure
  .input(
    z.object({
      ideaNick: z.string(),
    })
  )
  .query(({ input }) => {
    const idea = ideas.find((idea) => idea.nick === input.ideaNick);
    return { idea: idea || null };
  });

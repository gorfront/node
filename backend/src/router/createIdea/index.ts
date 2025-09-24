import { trpc } from "../../lib/trpc.ts";
import { zCreateIdeaTrpcInput } from "./input.ts";

export const createIdeaTrpcRoute = trpc.procedure.input(zCreateIdeaTrpcInput).mutation(async ({ input, ctx }) => {
  const exIdea = await ctx.prisma.idea.findUnique({
    where: {
      nick: input.nick,
    },
  });

  if (exIdea) {
    throw Error("Idea with this nick already exists");
  }

  await ctx.prisma.idea.create({
    data: input,
  });

  return true;
});

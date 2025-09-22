import { ideas } from "../../lib/ideas.ts";
import { trpc } from "../../lib/trpc.ts";
import { zCreateIdeaTrpcInput } from "./input.ts";

export const createIdeaTrpcRoute = trpc.procedure.input(zCreateIdeaTrpcInput).mutation(({ input }) => {
  if (ideas.find((idea) => idea.nick === input.nick)) {
    throw Error("Idea with this nick already exists");
  }

  ideas.unshift(input);
  return true;
});

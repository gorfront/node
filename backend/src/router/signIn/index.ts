import { trpc } from "../../lib/trpc.ts";
import { getPassworHash } from "../../utils/getPassworHash.ts";
import { zSignInTrpcInput } from "./input.ts";

export const signInTrpcRoute = trpc.procedure.input(zSignInTrpcInput).mutation(async ({ ctx, input }) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      nick: input.nick,
      passwod: getPassworHash(input.password),
    },
  });
  if (!user) {
    throw new Error("Wrong nick or password");
  }
  return true;
});

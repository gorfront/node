import { trpc } from "../../../lib/trpc.ts";
import { getPasswordHash } from "../../../utils/getPasswordHash.ts";
import { signJWT } from "../../../utils/signJWT.ts";
import { zSignInTrpcInput } from "./input.ts";

export const signInTrpcRoute = trpc.procedure.input(zSignInTrpcInput).mutation(async ({ ctx, input }) => {
  const user = await ctx.prisma.user.findFirst({
    where: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  });
  if (!user) {
    throw new Error("Wrong nick or password");
  }
  const token = signJWT(user.id);
  return { token };
});

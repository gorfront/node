import { trpc } from "../../../lib/trpc.ts";
import { zSignUpTrpcInput } from "./input.ts";
import { getPasswordHash } from "../../../utils/getPasswordHash.ts";
import { signJWT } from "../../../utils/signJWT.ts";

export const signUpTrpcRoute = trpc.procedure.input(zSignUpTrpcInput).mutation(async ({ ctx, input }) => {
  const exUser = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  });
  if (exUser) {
    throw new Error("User with this nick already exists");
  }
  const user = await ctx.prisma.user.create({
    data: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  });
  const token = signJWT(user.id);
  return { token };
});

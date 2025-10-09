import { trpc } from "../../../lib/trpc.ts";
import { zSignUpTrpcInput } from "./input.ts";
import { getPasswordHash } from "../../../utils/getPasswordHash.ts";
import { signJWT } from "../../../utils/signJWT.ts";
import { sendWelcomeEmail } from "../../../lib/emails.ts";

export const signUpTrpcRoute = trpc.procedure.input(zSignUpTrpcInput).mutation(async ({ ctx, input }) => {
  const exUserWithNick = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  });
  if (exUserWithNick) {
    throw new Error("User with this nick already exists");
  }
  const exUserWithEmail = await ctx.prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });
  if (exUserWithEmail) {
    throw new Error("User with this email already exists");
  }
  const user = await ctx.prisma.user.create({
    data: {
      nick: input.nick,
      email: input.email,
      password: getPasswordHash(input.password),
    },
  });
  void sendWelcomeEmail({ user });
  const token = signJWT(user.id);
  return { token };
});

'use server';
import { auth, currentUser, User } from '@clerk/nextjs/server';

/**
 *
 * @returns
 */
export const protectRoute = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const user = (await currentUser()) as User;
  return { userId, user };
};

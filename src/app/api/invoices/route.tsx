import { protectRoute } from '@/common/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { user, userId } = await protectRoute();
  return Response.json({ userId, user, request });
}

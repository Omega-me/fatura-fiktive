import { protectRoute } from '@/common/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ invoiceId: string }> }) {
  const { user, userId } = await protectRoute();
  const { invoiceId } = await params;
  return Response.json({ userId, user, request, invoiceId });
}

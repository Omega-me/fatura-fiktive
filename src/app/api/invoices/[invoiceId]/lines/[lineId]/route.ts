import { protectRoute } from '@/common/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ invoiceId: string; lineId: string }> }) {
  const { user, userId } = await protectRoute();
  const { invoiceId, lineId } = await params;
  return Response.json({ userId, user, request, invoiceId, lineId });
}

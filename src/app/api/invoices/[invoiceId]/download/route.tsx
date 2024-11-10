import { protectRoute } from '@/common/utils';
import { Pdf } from '@/components';
import { renderToStream } from '@react-pdf/renderer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  await protectRoute();
  console.log(request);
  const pdfStream = await renderToStream(<Pdf />);
  return new NextResponse(pdfStream as unknown as ReadableStream);
}

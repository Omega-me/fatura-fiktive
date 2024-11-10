import { protectRoute } from '@/common/utils';
import Pdf2 from '@/components/pdf/Pdf2';
import { renderToStream } from '@react-pdf/renderer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  await protectRoute();
  console.log(request);
  const pdfStream = await renderToStream(<Pdf2 />);
  return new NextResponse(pdfStream as unknown as ReadableStream);
}

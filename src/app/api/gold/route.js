import { collectApiRequest } from '@/app/lib/collectApi/client';
import { COLLECT_API_ENDPOINTS } from '@/app/lib/collectApi/endpoints';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await collectApiRequest(COLLECT_API_ENDPOINTS.goldPrice);

  if (!data) {
    return NextResponse.json({ error: 'Veri alınamadı' }, { status: 500 });
  }

  return NextResponse.json(data);
}

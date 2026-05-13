import { collectApiRequest } from '@/app/lib/collectApi/client';
import { COLLECT_API_ENDPOINTS } from '@/app/lib/collectApi/endpoints';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await collectApiRequest(COLLECT_API_ENDPOINTS.borsaIstanbul);

  if (!data) {
    return NextResponse.json({ error: 'Veri alinamadi' }, { status: 500 });
  }

  return NextResponse.json(data);
}

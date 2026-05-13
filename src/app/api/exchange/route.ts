import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { collectApiRequest } from '@/app/lib/collectApi/client';
import { COLLECT_API_ENDPOINTS } from '@/app/lib/collectApi/endpoints';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get('int');
  const to = searchParams.get('to');
  const base = searchParams.get('base');

  if (!amount || !to || !base) {
    return NextResponse.json(
      { error: 'Eksik parametre. int, to ve base zorunlu.' },
      { status: 400 }
    );
  }

  const params = { int: amount, to, base };
  const data = await collectApiRequest(COLLECT_API_ENDPOINTS.exchange, params);

  if (!data) {
    return NextResponse.json({ error: 'Veri alinamadi' }, { status: 500 });
  }

  return NextResponse.json(data);
}

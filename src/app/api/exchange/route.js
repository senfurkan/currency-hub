// api/exchange/route.js
import { collectApiRequest } from '@/app/lib/collectApi/client';
import { COLLECT_API_ENDPOINTS } from '@/app/lib/collectApi/endpoints';
import { NextResponse } from 'next/server';

export async function GET(request) {
  // request URL'den query parametrelerini al
  const { searchParams } = new URL(request.url);
  const int = searchParams.get('int');
  const to = searchParams.get('to');
  const base = searchParams.get('base');

  // Zorunlu parametreler var mı kontrol et
  if (!int || !to || !base) {
    return NextResponse.json(
      { error: 'Eksik parametre. int, to ve base zorunlu.' },
      { status: 400 }
    );
  }

  // Parametreleri objeye aktar
  const params = { int, to, base };

  // collectApiRequest fonksiyonuna parametreleri geçir
  const data = await collectApiRequest(COLLECT_API_ENDPOINTS.exchange, params);

  if (!data) {
    return NextResponse.json({ error: 'Veri alınamadı' }, { status: 500 });
  }

  return NextResponse.json(data);
}

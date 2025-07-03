// lib/collectApi/client.js
export async function collectApiRequest(endpoint, params = {}) {
  const url = new URL(`${process.env.COLLECT_API_BASE}${endpoint}`);

  // query parametrelerini ekle
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  try {
    const res = await fetch(url, {
      headers: {
        authorization: `apikey ${process.env.COLLECT_API_KEY}`,
        'content-type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) throw new Error(`API Hatası: ${res.status}`);

    return await res.json();
  } catch (error) {
    console.error(`[CollectAPI] ${endpoint} isteği başarısız:`, error);
    return null;
  }
}

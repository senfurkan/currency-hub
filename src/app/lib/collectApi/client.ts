import type { CollectApiEndpoint } from '@/app/lib/collectApi/endpoints';

type CollectApiQueryValue = string | number | boolean;

export async function collectApiRequest<T>(
  endpoint: CollectApiEndpoint,
  params: Record<string, CollectApiQueryValue> = {}
): Promise<T | null> {
  const url = new URL(`${process.env.COLLECT_API_BASE}${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  try {
    const res = await fetch(url, {
      headers: {
        authorization: `apikey ${process.env.COLLECT_API_KEY}`,
        'content-type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) throw new Error(`API Hatasi: ${res.status}`);

    return (await res.json()) as T;
  } catch (error: unknown) {
    console.error(`[CollectAPI] ${endpoint} istegi basarisiz:`, error);
    return null;
  }
}

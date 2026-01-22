export async function fetchJson(
  url: string,
  signal: AbortSignal,
): Promise<unknown> {
  const res = await fetch(url, {
    headers: { accept: "application/json" },
    signal,
  });
  if (!res.ok) throw new Response("Failed to load", { status: res.status });
  return res.json();
}

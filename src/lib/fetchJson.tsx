export async function fetchJson(
  url: string,
  signal: AbortSignal,
): Promise<unknown> {
  const res = await fetch(url, {
    headers: { accept: "application/json" },
    signal,
  });
  if (!res.ok) throw new Response("Failed to load", { status: res.status });
  const data = await res.json();
  console.log("fetchJson Data", data);
  return data;
}

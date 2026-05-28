const LIVE_STATUS_KEY = "live-status";

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...(init.headers || {})
    }
  });
}

async function readLiveStatus(env) {
  const fallback = {
    live: false,
    updatedAt: null
  };

  if (!env.BEAD_BUDDIES_STATE) {
    return fallback;
  }

  const saved = await env.BEAD_BUDDIES_STATE.get(LIVE_STATUS_KEY, "json");
  return saved || fallback;
}

async function writeLiveStatus(env, live) {
  const status = {
    live,
    updatedAt: new Date().toISOString()
  };

  if (!env.BEAD_BUDDIES_STATE) {
    return status;
  }

  await env.BEAD_BUDDIES_STATE.put(LIVE_STATUS_KEY, JSON.stringify(status));
  return status;
}

function hasValidToken(request, env) {
  const expected = env.LIVE_ADMIN_TOKEN;
  if (!expected) return false;

  const header = request.headers.get("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  return token && token === expected;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/live-status" && request.method === "GET") {
      return json(await readLiveStatus(env));
    }

    if (url.pathname === "/api/live-toggle" && request.method === "POST") {
      if (!hasValidToken(request, env)) {
        return json({ error: "Invalid admin token" }, { status: 401 });
      }

      let body;
      try {
        body = await request.json();
      } catch (error) {
        return json({ error: "Invalid JSON body" }, { status: 400 });
      }

      if (typeof body.live !== "boolean") {
        return json({ error: "`live` must be true or false" }, { status: 400 });
      }

      return json(await writeLiveStatus(env, body.live));
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Not found" }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};

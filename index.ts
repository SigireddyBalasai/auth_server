import { auth } from "./auth";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/auth")) {
      return auth.handler(req);
    }
    return new Response("Not Found", { status: 404 });
  },
});

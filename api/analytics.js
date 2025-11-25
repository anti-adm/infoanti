export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const event = req.body || {};
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket?.remoteAddress ||
    null;

  console.log(
    "[analytics]",
    JSON.stringify({
      ...event,
      ip
    })
  );

  return res.status(204).end();
}

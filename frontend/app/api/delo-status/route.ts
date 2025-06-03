export async function GET() {
  const currentHour = new Date().getHours();
  const isDeloActive = currentHour >= 10 && currentHour <= 16; // placeholder logic

  return Response.json({ deloActive: isDeloActive });
}

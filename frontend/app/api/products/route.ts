export async function GET() {
  const sampleProducts = [
    {
      id: 1,
      name: "Solar Garden Lantern",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      category: "Home & Garden",
      price: 39.95,
      deloPrice: 29.95,
      vendor: "GreenGlow Co.",
    },
    {
      id: 2,
      name: "Organic Soap Pack",
      image: "https://images.unsplash.com/photo-1588776814546-72d343514b95?auto=format&fit=crop&w=800&q=80",
      category: "Personal Care",
      price: 12.5,
      deloPrice: 9.95,
      vendor: "Soapistry Local",
    },
    {
      id: 3,
      name: "Vintage Picnic Blanket",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      category: "Events & Experiences",
      price: 45.0,
      deloPrice: 35.0,
      vendor: "Patch + Field",
    },
  ];

  return Response.json(sampleProducts);
}

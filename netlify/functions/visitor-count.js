import { getStore } from "@netlify/blobs";

export default async (request) => {
  if (request.method !== "POST") {
    return Response.json(
      {
        success: false,
        message: "Method not allowed",
      },
      { status: 405 },
    );
  }

  try {
    const { visitorId } = await request.json();

    if (!visitorId) {
      return Response.json(
        {
          success: false,
          message: "Visitor ID is required.",
        },
        { status: 400 },
      );
    }

    const store = getStore("visitor-counter");

    const visitorKey = `visitor:${visitorId}`;

    // Check whether this visitor has already been counted
    const existingVisitor = await store.get(visitorKey);

    if (!existingVisitor) {
      // Store this visitor
      await store.set(
        visitorKey,
        JSON.stringify({
          visitedAt: new Date().toISOString(),
        }),
      );
    }

    // Get the current counter
    const counterKey = "total-visitors";

    const existingCount = await store.get(counterKey);

    let totalVisitors = existingCount ? Number(existingCount) : 0;

    // Only increase the counter for a new visitor
    if (!existingVisitor) {
      totalVisitors += 1;

      await store.set(counterKey, String(totalVisitors));
    }

    return Response.json({
      success: true,
      visitors: totalVisitors,
    });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to retrieve visitor count.",
      },
      { status: 500 },
    );
  }
};

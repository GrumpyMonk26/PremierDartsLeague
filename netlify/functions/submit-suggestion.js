export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method not allowed",
      }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const { discordName, suggestion, website } = await request.json();

    // Honeypot spam protection
    // Genuine users should leave this field empty.
    if (website && website.trim()) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Suggestion submitted successfully.",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Validate required fields
    if (!discordName?.trim() || !suggestion?.trim()) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Discord name and suggestion are required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const webhookUrl = process.env.DISCORD_SUGGESTION_WEBHOOK;

    if (!webhookUrl) {
      console.error("DISCORD_SUGGESTION_WEBHOOK is not configured.");

      return new Response(
        JSON.stringify({
          success: false,
          message: "Discord webhook is not configured.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "💡 New League Suggestion",
            color: 0xff3341,
            fields: [
              {
                name: "Discord Name",
                value: discordName.trim(),
                inline: false,
              },
              {
                name: "Suggestion",
                value: suggestion.trim(),
                inline: false,
              },
            ],
            footer: {
              text: "Premier League Darts Website",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!discordResponse.ok) {
      const discordError = await discordResponse.text();

      console.error("Discord webhook error:", discordError);

      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to send suggestion to Discord.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Suggestion submitted successfully.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Suggestion submission error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong while submitting the suggestion.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

export default async (req) => {
  if (req.method !== "POST") {
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
    const { discordName, suggestion } = await req.json();

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
      console.error("Discord webhook is not configured.");

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
                inline: true,
              },

              {
                name: "Suggestion",
                value: suggestion.trim(),
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
      const errorText = await discordResponse.text();

      console.error("Discord webhook error:", errorText);

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
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Suggestion error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong.",
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

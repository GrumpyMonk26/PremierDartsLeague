/* eslint-disable no-undef */

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: "Method not allowed",
      }),
    };
  }

  try {
    const { discordName, suggestion } = JSON.parse(event.body || "{}");

    // Validate the form data
    if (!discordName?.trim() || !suggestion?.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Discord name and suggestion are required.",
        }),
      };
    }

    // Get the webhook from Netlify environment variables
    const webhookUrl = process.env.DISCORD_SUGGESTION_WEBHOOK;

    if (!webhookUrl) {
      console.error("DISCORD_SUGGESTION_WEBHOOK is not configured.");

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Discord webhook is not configured.",
        }),
      };
    }

    // Send the suggestion to Discord
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

      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Failed to send suggestion to Discord.",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Suggestion submitted successfully.",
      }),
    };
  } catch (error) {
    console.error("Suggestion submission error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Something went wrong while submitting the suggestion.",
      }),
    };
  }
};

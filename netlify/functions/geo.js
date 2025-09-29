export async function handler(event, context) {
  try {
    const ip = event.queryStringParameters.ip || "";
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEOIPIFY_KEY}&ipAddress=${ip}`;

    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "GeoIPify request failed" }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}

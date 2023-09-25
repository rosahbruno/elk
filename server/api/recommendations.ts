export default defineEventHandler(async (event) => {
  try {
    const { locale } = getQuery(event)

    const recommendations = await fetch(
      `https://firefox-api-proxy.readitlater.com/desktop/v1/recommendations?consumer_key=moso-web-dev&locale=${locale}`,
    )
      .then(response => response.json())
      .then(response => response.data)

    return recommendations
  }
  catch (err) {
    console.warn(err)
    return []
  }
})

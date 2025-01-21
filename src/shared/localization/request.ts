import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "ru";

  const messages = {
    ...(await import(`./messages/${locale}/header.line.json`)).default,
  };

  return {
    locale,
    messages: messages,
  };
});

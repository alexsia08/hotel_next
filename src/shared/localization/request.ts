import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "ru";

  const messages = {
    ...(await import(`./messages/${locale}/home/header.line.json`)).default,
    ...(await import(`./messages/${locale}/home/home.group.json`)).default,
  };

  return {
    locale,
    messages: messages,
  };
});

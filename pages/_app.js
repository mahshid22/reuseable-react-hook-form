import "../styles/globals.scss";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/components/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

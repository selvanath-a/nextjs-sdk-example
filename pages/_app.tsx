import { TweedFrontendSdkProvider } from "@paytweed/frontend-sdk-react";
import type { AppProps } from "next/app";
import { useCallback } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const sendMessageToBackend = useCallback(async (message: string) => {
    const response = await fetch("/api/tweed", {
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const { answer } = await response.json();
    return answer;
  }, []);

  return (
    <div style={{ width: "99vw", height: "90vh" }}>
      <TweedFrontendSdkProvider
        sendMessageToBackend={sendMessageToBackend}
        defaultBlockchainIds={["ethereumSepolia"]}
      >
        <Component {...pageProps} />
      </TweedFrontendSdkProvider>
    </div>
  );
}

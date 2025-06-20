import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
      id="tawk"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {};
          (function () {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/68549c9d562852190e9a1ee6/1iu587igi";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}

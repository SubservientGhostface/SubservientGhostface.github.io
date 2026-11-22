<!doctype html>
<html lang="en-US">
  <head>
  <meta name="ssgf-privacy-region" content="us">
<!-- Paramount CMP -->
<script>!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=document.createElement("script");e.type="text/javascript",e.src="https://global.ketchcdn.com/web/v3/config/paramount_pictures/subservient_ghostface_us/boot.js",e.defer=e.async=!0,document.getElementsByTagName("head")[0].appendChild(e)}();</script>
<!-- Optanon - standardized api for Paramount CMP -->
<script>
(function(a){
var w=window,b='cbsoptanon',q='cmd',r='config';
w[b] = w[b] ? w[b] : {};
w[b][q] = w[b][q] ? w[b][q] : [];
w[b][r] = w[b][r] ? w[b][r] : [];
a.forEach(function(z){
w[b][z] = w[b][z] || function(){
var c=arguments;
w[b][q].push(function(){
w[b][z].apply(w[b],c);
})
}
});
})(["onScriptsReady","onAdsReady"]);
</script>
<script src="https://cdn.privacy.paramount.com/dist/optanon-v2.0.0.js" async></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted",
  security_storage: "granted",
  wait_for_update: 500
});
(function () {
  var EVENTS = { LOADED: "ketchConsent", CHANGED: "ketchPermitChanged" };
  function analyticsGranted(detail) {
    if (!detail) return false;
    if (detail.analytics === true) return true;
    if (typeof detail.groups === "string" && /(?:^|,)analytics:1(?:,|$)/.test(detail.groups)) {
      return true;
    }
    var purposes = detail.purposes;
    if (purposes && purposes.analytics) {
      var allowed = purposes.analytics.allowed;
      return allowed === true || allowed === "true";
    }
    return false;
  }
  function applyConsentUpdate(detail) {
    gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: analyticsGranted(detail) ? "granted" : "denied"
    });
  }
  function inspectEntry(entry) {
    if (!entry || typeof entry !== "object") return;
    var name = entry.event;
    if (name === EVENTS.LOADED || name === EVENTS.CHANGED) applyConsentUpdate(entry);
  }
  var dataLayer = window.dataLayer;
  for (var i = 0; i < dataLayer.length; i++) inspectEntry(dataLayer[i]);
  var push = dataLayer.push;
  dataLayer.push = function () {
    for (var i = 0; i < arguments.length; i++) inspectEntry(arguments[i]);
    return push.apply(dataLayer, arguments);
  };
  window.addEventListener("ParamountCMP.1", function (event) {
    if (event && event.detail) applyConsentUpdate(event.detail);
  });
})();
</script>

    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content"
    />
    <meta name="theme-color" content="#000000" />
    <meta name="application-name" content="Subservient Ghostface - SCARY MOVIE - In Theatres June 5" />
    <meta name="apple-mobile-web-app-title" content="Subservient Ghostface - SCARY MOVIE - In Theatres June 5" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <meta http-equiv="Permissions-Policy" content="picture-in-picture=()" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <link rel="canonical" href="https://subservientghostface.com/" />
    <link rel="alternate" hreflang="en-US" href="https://subservientghostface.com/" />
    <link rel="alternate" hreflang="en-GB" href="https://subservientghostface.com/uk" />
    <link rel="alternate" hreflang="en-AU" href="https://subservientghostface.com/au" />
    <link rel="alternate" hreflang="fr-FR" href="https://subservientghostface.com/fr" />
    <link rel="alternate" hreflang="nl-NL" href="https://subservientghostface.com/nl" />
    <link rel="alternate" hreflang="es-MX" href="https://subservientghostface.com/mx" />
    <link rel="alternate" hreflang="es-ES" href="https://subservientghostface.com/es" />
    <link rel="alternate" hreflang="de-DE" href="https://subservientghostface.com/de" />
    <link rel="alternate" hreflang="pt-BR" href="https://subservientghostface.com/br" />
    <link rel="alternate" hreflang="it-IT" href="https://subservientghostface.com/it" />
    <link rel="alternate" hreflang="x-default" href="https://subservientghostface.com/" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>Subservient Ghostface - SCARY MOVIE - In Theatres June 5</title>
    <meta
      name="description"
      content="Type anything. He&#39;ll do (almost) anything."
    />

    <!-- Open Graph (overridden per-clip on /share/<command>_<variant>) -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Subservient Ghostface - SCARY MOVIE - In Theatres June 5" />
    <meta property="og:title" content="Subservient Ghostface - SCARY MOVIE - In Theatres June 5" />
    <meta
      property="og:description"
      content="Type anything. He&#39;ll do (almost) anything."
    />
    <meta property="og:url" content="https://subservientghostface.com/" />
    <meta property="og:image" content="https://subservientghostface.com/share-card-v2.png" />
    <meta property="og:image:secure_url" content="https://subservientghostface.com/share-card-v2.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Subservient Ghostface logo" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Subservient Ghostface - SCARY MOVIE - In Theatres June 5" />
    <meta
      name="twitter:description"
      content="Type anything. He&#39;ll do (almost) anything."
    />
    <meta name="twitter:image" content="https://subservientghostface.com/share-card-v2.png" />
    <meta name="twitter:image:alt" content="Subservient Ghostface logo" />

    <!-- Typography: mirrors scarymovie.film (Adobe Fonts / Typekit packs). Domain must stay allowlisted on the Paramount web project or browsers fall back to the stack below. -->
    <link rel="stylesheet" href="https://use.typekit.net/gsb3nxg.css" />
    <link rel="stylesheet" href="https://use.typekit.net/yvy5yts.css" />

    <script type="module" crossorigin src="/assets/app-C7sjIYOH.js"></script>
    <link rel="modulepreload" crossorigin href="/assets/share-exporter-C7HtZSx9.js">
    <link rel="stylesheet" crossorigin href="/assets/share-exporter-CKAsQ2fK.css">
    <!-- Google tag (gtag.js) — Paramount optanon-category-2 -->
  <script type="text/plain" class="optanon-category-2" async src="https://www.googletagmanager.com/gtag/js?id=G-HKSHD0K8MY"></script>
  <script type="text/plain" class="optanon-category-2">
    gtag("js", new Date());
    gtag("config", "G-HKSHD0K8MY");
  </script>
</head>
  <body>
    <noscript>
      <p>This site requires JavaScript.</p>
    </noscript>

    <main id="app" data-state="age-gate">
      <!--
        Components mount into this element from src/main.ts.
        data-state values: age-gate | age-block | booting | boot-error | idle | playing | sharing | refusal
      -->
    </main>

  </body>
</html>

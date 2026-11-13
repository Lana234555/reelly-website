import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import Navbar from "@/components/webflow/Navbar";
import Footer from "@/components/webflow/Footer";
import ConsultingPage from "@/components/services/ConsultingPage";

export const metadata: Metadata = {
  title: "B2B Sales Consulting for Real Estate Developers | Reelly",
  description: "A 6-week consulting program for developers who want to fix broker activation, CRM chaos and B2B sales inefficiency.",
  openGraph: { title: "B2B Sales Consulting for Real Estate Developers | Reelly", description: "A 6-week consulting program for developers who want to fix broker activation, CRM chaos and B2B sales inefficiency.", type: "website" },
};

// Navbar/footer still use the Webflow runtime (dropdowns, mobile menu) and site analytics.
const page: LegacyPage = {
  "wfPage": "69e7a5c76cc2d4680c4a8bd0",
  "bodyClass": "",
  "styles": [
    "/legacy/webflow.css"
  ],
  "scripts": [
    {
      "src": "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    },
    {
      "src": "/legacy/js/inline-0c879ecfc1.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-0e9e3ad57a.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-0d60ae357c.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-2218413ac1.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-1d5f1d33e9.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-b7f9d639cb.js",
      "inline": true
    },
    {
      "async": true,
      "src": "https://embed.wized.com/lnBEpfzj3X7t3rCHAY3j.js"
    },
    {
      "type": "module",
      "async": true,
      "attrs": {
        "data-wized-id": "lnBEpfzj3X7t3rCHAY3j"
      },
      "src": "https://embed.wized.com/v2/index.js"
    },
    {
      "src": "/legacy/js/inline-eb8a3b0624.js",
      "inline": true
    },
    {
      "type": "module",
      "async": true,
      "attrs": {
        "siteid": "6297c98631a984c162542adb"
      },
      "src": "/legacy/js/finsweetcomponentsconfig-1.0.103.js"
    },
    {
      "src": "/legacy/js/jquery-3.5.1.min.js"
    },
    {
      "src": "/legacy/js/webflow.schunk.36b8fb49256177c8.js"
    },
    {
      "src": "/legacy/js/webflow.schunk.e6244fc23ea72279.js"
    },
    {
      "src": "/legacy/js/webflow.29649b96.88d82429db7fc9d9.js"
    },
    {
      "src": "/legacy/js/inline-a37b2cb214.js",
      "inline": true
    }
  ]
};

export default function Page() {
  return (
    <div className={page.bodyClass}>
      <Navbar />
      <ConsultingPage />
      <Footer />
      <LegacyWebflow {...page} />
    </div>
  );
}

import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import Navbar from "@/components/webflow/Navbar";
import Footer from "@/components/webflow/Footer";
import WhiteLabelPage from "@/components/services/WhiteLabelPage";

export const metadata: Metadata = {
  title: "White Label Broker Sales Infrastructure | Reelly",
  description: "A dedicated broker ecosystem built around your existing CRM: admin panel, data layer, API, white-label platform, mobile app and BRM.",
  openGraph: { title: "White Label Broker Sales Infrastructure | Reelly", description: "A dedicated broker ecosystem built around your existing CRM: admin panel, data layer, API, white-label platform, mobile app and BRM.", type: "website" },
};

// Navbar/footer still use the Webflow runtime (dropdowns, mobile menu) and site analytics.
const page: LegacyPage = {
  "wfPage": "69ea3e0e9e76a2422088075a",
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
      <WhiteLabelPage />
      <Footer />
      <LegacyWebflow {...page} />
    </div>
  );
}

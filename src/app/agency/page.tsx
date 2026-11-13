import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import Navbar from "@/components/webflow/Navbar";
import S01AgencyBody2 from "./_sections/S01AgencyBody2";
import S02Div from "./_sections/S02Div";
import Footer from "@/components/webflow/Footer";

export const metadata: Metadata = {
  "title": "Agency",
  "openGraph": {
    "title": "Agency",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Agency"
  }
};

const page: LegacyPage = {
  "wfPage": "67b97ab852e84a6bb4aa8abf",
  "bodyClass": "body-black _1",
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
      "src": "/legacy/js/inline-12496a79e6.js",
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
      <S01AgencyBody2 />
      <S02Div />
      <Footer />
      <LegacyWebflow {...page} />
    </div>
  );
}

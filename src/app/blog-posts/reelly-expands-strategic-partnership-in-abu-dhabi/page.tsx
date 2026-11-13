import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import Navbar3 from "@/components/webflow/Navbar3";
import S01BlogSektion from "./_sections/S01BlogSektion";
import S02BlogSektion from "./_sections/S02BlogSektion";
import AgentsSection from "@/components/webflow/AgentsSection";
import Footer from "@/components/webflow/Footer";
import S03WEmbed from "./_sections/S03WEmbed";

export const metadata: Metadata = {
  "title": "Reelly Expands Strategic Partnership in Abu Dhabi",
  "description": "Reelly is expanding in Abu Dhabi, strengthening ties with Ohana Development as part of its strategy to build direct partnerships with leading UAE developers.",
  "openGraph": {
    "title": "Reelly Expands Strategic Partnership in Abu Dhabi",
    "images": [
      "/cdn/62a47d8c21acef8236283091/699fb70ae7ca50b27cef2a7a_Rectangle-144504.png"
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Reelly Expands Strategic Partnership in Abu Dhabi",
    "images": [
      "/cdn/62a47d8c21acef8236283091/699fb70ae7ca50b27cef2a7a_Rectangle-144504.png"
    ]
  }
};

const page: LegacyPage = {
  "wfPage": "62fa2f18e0ceed3354a61e8f",
  "bodyClass": "body-3",
  "styles": [
    "/legacy/webflow.css",
    "/legacy/css/caee5d6484.css"
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
    },
    {
      "src": "/legacy/js/inline-079bedaf7f.js",
      "inline": true
    },
    {
      "src": "/legacy/js/inline-93a8060152.js",
      "inline": true
    }
  ]
};

export default function Page() {
  return (
    <div className={page.bodyClass}>
      <Navbar3 />
      <S01BlogSektion />
      <S02BlogSektion />
      <AgentsSection />
      <Footer />
      <S03WEmbed />
      <LegacyWebflow {...page} />
    </div>
  );
}

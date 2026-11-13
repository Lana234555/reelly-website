import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import Navbar from "@/components/webflow/Navbar";
import S01SectionHome from "./_sections/S01SectionHome";
import S02MenuGeneralBlock from "./_sections/S02MenuGeneralBlock";
import S03CentalMenuSection from "./_sections/S03CentalMenuSection";
import S04SectionBlog from "./_sections/S04SectionBlog";
import Footer from "@/components/webflow/Footer";

export const metadata: Metadata = {
  "title": "Reelly AI - Sell real estate quickly with guaranteed payment for the result",
  "description": "We unite developers and agents on the platform to establish effective sales through a transparent commission payment system.",
  "openGraph": {
    "title": "Reelly AI - Sell real estate quickly with guaranteed payment for the result",
    "description": "We unite developers and agents on the platform to establish effective sales through a transparent commission payment system.",
    "images": [
      "/cdn/6297c98631a984c162542adb/649adc1c80b2e8dad1e5ebe3_Registration.png"
    ],
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Reelly AI - Sell real estate quickly with guaranteed payment for the result",
    "description": "We unite developers and agents on the platform to establish effective sales through a transparent commission payment system.",
    "images": [
      "/cdn/6297c98631a984c162542adb/649adc1c80b2e8dad1e5ebe3_Registration.png"
    ]
  }
};

const page: LegacyPage = {
  "wfPage": "649ab7a55d0dec0c8f5ef540",
  "bodyClass": "body-9",
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
      "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6297c98631a984c162542adb"
    },
    {
      "src": "/legacy/js/webflow.schunk.36b8fb49256177c8.js"
    },
    {
      "src": "/legacy/js/webflow.schunk.e6244fc23ea72279.js"
    },
    {
      "src": "/legacy/js/webflow.9cd7042b.ef801bf224ca5106.js"
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
      <S01SectionHome />
      <S02MenuGeneralBlock />
      <S03CentalMenuSection />
      <S04SectionBlog />
      <Footer />
      <LegacyWebflow {...page} />
    </div>
  );
}

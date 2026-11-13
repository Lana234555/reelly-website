import type { Metadata } from "next";
import LegacyWebflow, { type LegacyPage } from "@/components/LegacyWebflow";
import S01WEmbed from "./_sections/S01WEmbed";
import S02Navbar from "./_sections/S02Navbar";
import Gradient from "@/components/webflow/Gradient";
import S03RegistrationPopup from "./_sections/S03RegistrationPopup";
import S04AssistantPopup from "./_sections/S04AssistantPopup";
import S05PropertyPopup from "./_sections/S05PropertyPopup";
import S06Section from "./_sections/S06Section";
import S07Section from "./_sections/S07Section";
import S08SectionNetwork from "./_sections/S08SectionNetwork";
import S09Section from "./_sections/S09Section";
import S10SectionAssistant from "./_sections/S10SectionAssistant";
import S11Section from "./_sections/S11Section";
import S12Section from "./_sections/S12Section";
import S13Section from "./_sections/S13Section";
import S14Section from "./_sections/S14Section";
import S15SectionBlog from "./_sections/S15SectionBlog";
import S16Section from "./_sections/S16Section";
import S17ChatVidget from "./_sections/S17ChatVidget";
import Footer from "@/components/webflow/Footer";

export const metadata: Metadata = {
  "title": "Find the best agents to buy property in Dubai",
  "description": "International search engine of professional real estate agents whose level of expertise is confirmed by real and objective reviews",
  "openGraph": {
    "title": "Find the best agents to buy property in Dubai",
    "description": "International search engine of professional real estate agents whose level of expertise is confirmed by real and objective reviews",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Find the best agents to buy property in Dubai",
    "description": "International search engine of professional real estate agents whose level of expertise is confirmed by real and objective reviews"
  }
};

const page: LegacyPage = {
  "wfPage": "62fa2f18e0ceed43c0a61e78",
  "bodyClass": "body",
  "styles": [
    "/legacy/webflow.css",
    "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css",
    "/legacy/css/9337c02a74.css"
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
      "src": "https://cdn.weglot.com/weglot.min.js"
    },
    {
      "src": "/legacy/js/inline-b8cc7c9a2d.js",
      "inline": true
    },
    {
      "type": "application/json",
      "src": "/legacy/js/inline-daadc94b79.js",
      "inline": true
    },
    {
      "type": "application/json",
      "src": "/legacy/js/inline-daadc94b79.js",
      "inline": true
    },
    {
      "type": "application/json",
      "src": "/legacy/js/inline-daadc94b79.js",
      "inline": true
    },
    {
      "type": "application/json",
      "src": "/legacy/js/inline-daadc94b79.js",
      "inline": true
    },
    {
      "type": "application/json",
      "src": "/legacy/js/inline-daadc94b79.js",
      "inline": true
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
      "src": "/legacy/js/webflow.ce94916b.7a1ceff7fe00e386.js"
    },
    {
      "src": "/legacy/js/inline-a37b2cb214.js",
      "inline": true
    },
    {
      "src": "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    },
    {
      "src": "/legacy/js/inline-de2552866b.js",
      "inline": true
    },
    {
      "src": "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.6/dist/js/splide.min.js"
    },
    {
      "src": "/legacy/js/inline-62a5e81313.js",
      "inline": true
    },
    {
      "src": "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"
    },
    {
      "src": "/legacy/js/inline-d4b8299d89.js",
      "inline": true
    },
    {
      "src": "https://cdn.jsdelivr.net/npm/@finsweet/cms-library@1/cms-library.js"
    },
    {
      "src": "/legacy/js/inline-188a046e12.js",
      "inline": true
    }
  ]
};

export default function Page() {
  return (
    <div className={page.bodyClass}>
      <S01WEmbed />
      <S02Navbar />
      <Gradient />
      <S03RegistrationPopup />
      <S04AssistantPopup />
      <S05PropertyPopup />
      <S06Section />
      <S07Section />
      <S08SectionNetwork />
      <S09Section />
      <S10SectionAssistant />
      <S11Section />
      <S12Section />
      <S13Section />
      <S14Section />
      <S15SectionBlog />
      <S16Section />
      <S17ChatVidget />
      <Footer />
      <LegacyWebflow {...page} />
    </div>
  );
}

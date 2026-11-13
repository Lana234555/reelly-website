import AgencyMarquee from "@/components/agency/AgencyMarquee";

export default function S01AgencyBody2Part01() {
  return (
    <section className="agency-section-2 _1">
      <div className="w-layout-blockcontainer agency-container-2 w-container">
        <div className="agenci-info-block-2">
          <div className="agency-text-block">
            <h1 className="agency-h1-2">
              {"Reelly is the "}
              <span className="green-text-2">
                Secret Tool
              </span>
              {" of successful real estate agencies"}
            </h1>
            <p className="agency-paragrapch-2">
              A one-stop solution for optimizing the effectiveness of off-plan sales through a White Label model.
            </p>
            <a href="#plans" className="agency-button-2 w-inline-block">
              <div className="lightning--ss w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {" "}
                  <path d="M10.8334 8.33333V2.5L3.33337 11.6667H9.16671L9.16671 17.5L16.6667 8.33333L10.8334 8.33333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  {" "}
                </svg>
              </div>
              <div>
                Buy Now
              </div>
            </a>
            <img sizes="100vw" srcSet="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-201000002445-p-500.png 500w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-201000002445-p-800.png 800w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-201000002445-p-1080.png 1080w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-201000002445-p-1600.png 1600w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-1000002445.avif 1933w" alt="" src="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcfa6_Group-1000002445.avif" loading="lazy" className="background-agency mobil" />
            <img sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px" srcSet="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf32_Frame-1000006488.avif 500w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf32_Frame-1000006488.avif 800w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf32_Frame-1000006488.avif 1080w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf32_Frame-1000006488.avif 3840w" alt="" src="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf32_Frame-1000006488.avif" loading="lazy" className="background-agency table" />
            <img sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px" srcSet="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-201000002469-p-500.png 500w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-201000002469-p-800.png 800w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-201000002469-p-1080.png 1080w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-201000002469-p-1600.png 1600w, /cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-1000002469.avif 3342w" alt="" src="/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf22_Group-1000002469.avif" loading="lazy" className="image-123" />
          </div>
          <AgencyMarquee />
        </div>
      </div>
    </section>
  );
}

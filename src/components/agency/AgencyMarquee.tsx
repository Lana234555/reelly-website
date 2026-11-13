// Agency leaders who use Reelly, shown on /agency as an endless, slow logo carousel.
// To add a company, add an entry here; photos and logos live in /public.
const leaders = [
  { name: ["Amer", "Saadeh"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/6abad2e6b4b3d89063714853_Frame-1000006487.png", logo: "/cdn/6297c98631a984c162542adb/6abad1f867b849937c151018_Frame-1000006479.png" },
  { name: ["Junaid A", "Merchant"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf41_Rectangle-920.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf52_Frame-1000006478.avif" },
  { name: ["Nitin", "Chopra"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf45_Rectangle-920-1.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf5e_Frame-1000006478-1.avif" },
  { name: ["Ather", "Muhammad"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf43_Rectangle-920-2.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf4e_Frame-1000006478-2.avif" },
  { name: ["Nazish", "Khan"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf47_Rectangle-920-6.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf62_Frame-1000006478-6.avif" },
  { name: ["Simon", "Baker"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf3f_Rectangle-920-4.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf5a_Frame-1000006478-4.avif" },
  { name: ["Loai Al", "Fakir"], position: "CEO", photo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf3d_Rectangle-920-5.avif", logo: "/cdn/6297c98631a984c162542adb/67c53feca027a01c6cbdcf4a_Frame-1000006478-5.avif" },
  { name: ["Fahad", "Haq"], position: "CEO", photo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f01c4_Rectangle-920-2.avif", logo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f01c8_Frame-1000006478.avif" },
  { name: ["Arian", "Ajdari"], position: "CEO", photo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f01bc_Rectangle-920-3.avif", logo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f01a4_Rectangle-144507.avif" },
  { name: ["Lee", "Wang"], position: "CEO", photo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f01ad_Rectangle-920-4.avif", logo: "/cdn/63c5585ff31e74bfcf46a136/67bc8c840adb13461d5f019a_Frame-1000006478-1.avif" },
];

function Card({ leader }: { leader: (typeof leaders)[number] }) {
  return (
    <div className="agency-card-2">
      <div className="agency-avatar-name">
        <img loading="lazy" src={leader.photo} alt={leader.name.join(" ")} className="avatar-ceo" />
        <div className="agency-name-position">
          <h4 className="name-ceo-2">
            {leader.name.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h4>
          <div className="text-block-107">{leader.position}</div>
        </div>
      </div>
      <img loading="lazy" src={leader.logo} alt="" className="logo-agency" />
    </div>
  );
}

// Seamless marquee: the list is rendered twice and the track moves by exactly one
// copy, so the loop has no visible jump. Speed: --marquee-duration (see ux.css).
export default function AgencyMarquee() {
  return (
    <div className="scroll-ambassador agency-marquee">
      <div className="agency-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="w-layout-grid agency-grid-2" aria-hidden={copy === 1}>
            {leaders.map((l) => (
              <Card key={l.name.join(" ")} leader={l} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

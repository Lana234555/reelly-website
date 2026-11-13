import S03CentalMenuSectionPart01 from "./S03CentalMenuSectionPart01";
import S03CentalMenuSectionPart02 from "./S03CentalMenuSectionPart02";

export default function S03CentalMenuSection() {
  return (
    <section className="cental-menu-section">
      <div className="w-layout-blockcontainer central-menu-container w-container">
        <S03CentalMenuSectionPart01 />
        <S03CentalMenuSectionPart02 />
      </div>
    </section>
  );
}

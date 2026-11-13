import S01ProptechBlockPart01 from "./S01ProptechBlockPart01";
import S01ProptechBlockPart02 from "./S01ProptechBlockPart02";
import S01ProptechBlockPart03 from "./S01ProptechBlockPart03";
import S01ProptechBlockPart04 from "./S01ProptechBlockPart04";

export default function S01ProptechBlock() {
  return (
    <div className="proptech-block">
      <S01ProptechBlockPart01 />
      <S01ProptechBlockPart02 />
      <S01ProptechBlockPart03 />
      <S01ProptechBlockPart04 />
    </div>
  );
}

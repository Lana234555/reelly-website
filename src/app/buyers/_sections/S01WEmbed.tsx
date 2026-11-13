export default function S01WEmbed() {
  return (
    <div className="w-embed w-iframe">
      <style dangerouslySetInnerHTML={{ __html: "\n/*\nbody {\n font-size: 1.25vw;\n}\n" }} />
      {" "}
      <style dangerouslySetInnerHTML={{ __html: "\n  html { font-size: calc(0.6250000000000002rem + 0.3124999999999999vw); }\n  @media screen and (max-width:1920px) { html { font-size: calc(0.625rem + 0.31250000000000006vw); } }\n  @media screen and (max-width:1280px) { html { font-size: calc(0.32136678200692054rem + 0.6920415224913493vw); } }\n  @media screen and (max-width:991px) { html { font-size: calc(0.51611328125rem + 0.78125vw); } }\n  @media screen and (max-width:479px) { html { font-size: calc(0.7494769874476988rem + 0.8368200836820083vw); } }\n\n" }} />
      {" "}
      {" "}
      {" "}
    </div>
  );
}

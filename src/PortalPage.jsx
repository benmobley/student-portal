import { PortalShow } from "./PortalShow";

export function PortalPage() {
  const handleShow = (profile) => {
    console.log("handleShow", profile);
  };

  return (
    <main>
      <PortalShow onShow={handleShow} />
    </main>
  );
}

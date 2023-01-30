import React from "react";
interface prop {
  handleCHange: (e: React.FormEvent) => void;
}
function Btn({ handleCHange }: prop) {
  return (
    <>
      <span className="Btn-primary" onClick={handleCHange}>
        Add
      </span>
    </>
  );
}

export default Btn;

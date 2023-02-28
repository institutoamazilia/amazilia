import React from "react";
import privacyPolicyDoc from "../files/Politica_de_privacidade.pdf";

export default function PrivacyPolicy() {
  return (
    <div>
      <embed
        src={privacyPolicyDoc}
        type="application/pdf"
        width="100%"
        height="720px"
      />
    </div>
  );
}

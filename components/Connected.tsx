import React from "react";

import { ConnectWallet } from "@thirdweb-dev/react";

const Connected = () => {
  return (
    <div className="flex justify-between mx-7 m-4">
      <p>Eye Eye Tee</p>
      <ConnectWallet />
    </div>
  );
};

export default Connected;

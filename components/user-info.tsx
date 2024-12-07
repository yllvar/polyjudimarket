'use client'

import { useAddress, useConnectionStatus } from "@thirdweb-dev/react";

export function UserInfo() {
  const address = useAddress();
  const connectionStatus = useConnectionStatus();

  if (connectionStatus === "unknown" || connectionStatus === "connecting") {
    return <div>Loading...</div>;
  }

  if (connectionStatus === "disconnected") {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <h2>Connected Wallet</h2>
      <p>{address}</p>
    </div>
  );
}


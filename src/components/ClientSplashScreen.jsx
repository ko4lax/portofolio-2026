"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SplashScreen = dynamic(() => import("./SplashScreen"), {
  ssr: false,
  loading: () => (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-background'>
      <div className='text-2xl font-bold text-primary'>
        Loading...
      </div>
    </div>
  ),
});

export default function ClientSplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);

  useEffect(() => {
    // Set minimum display time to 2 seconds
    const minimumTimeTimer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 2000);

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Backup timer to ensure splash screen disappears even if load event misses
    const backupTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(backupTimer);
    };
  }, [minimumTimeElapsed]);

  return isLoading ? <SplashScreen /> : null;
}

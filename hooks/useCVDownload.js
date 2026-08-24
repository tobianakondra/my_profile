"use client";
import { useState, useCallback } from "react";

export function useCVDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCV = useCallback(async () => {
    setIsDownloading(true);
    try {
      await fetch("/api/cv-download", { method: "POST" });
    } catch {
      // Silently fail
    } finally {
      setIsDownloading(false);
    }

    const link = document.createElement("a");
    link.href = "/assets/CV_Richard_Diatta.pdf";
    link.download = "CV_Richard_Diatta.pdf";
    link.click();
  }, []);

  return { downloadCV, isDownloading };
}
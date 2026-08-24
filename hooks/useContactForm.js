"use client";
import { useState, useCallback } from "react";

export function useContactForm() {
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const submitForm = useCallback(async (formData) => {
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        return { success: true };
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Une erreur est survenue.");
        return { success: false, error: data.error };
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de contacter le serveur. Réessayez plus tard.");
      return { success: false, error: "Network error" };
    }
  }, []);

  const resetStatus = useCallback(() => {
    setStatus(null);
    setErrorMsg("");
  }, []);

  return { submitForm, status, errorMsg, resetStatus };
}
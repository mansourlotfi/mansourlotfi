"use client";

import App from "./app";
import { ModalProvider } from "@/context/modal-context";
import { ThemeProvider } from "@/context/theme-context";

export default function Home() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  );
}

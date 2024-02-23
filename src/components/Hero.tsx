"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    // link: "https://gomoonbeam.com",
    link: "",
    thumbnail:
      "/moonbeam.png",
  },
  {
    title: "Cursor",
    // link: "https://cursor.so",
    link: "",
    thumbnail:
      "/cursor.png",
  },
  {
    title: "Rogue",
    // link: "https://userogue.com",
    link: "",
    thumbnail:
      "/rogue.png",
  },

  {
    title: "Editorially",
    // link: "https://editorially.org",
    link: "",
    thumbnail:
      "/editorially.png",
  },
  {
    title: "Editrix AI",
    // link: "https://editrix.ai",
    link: "",
    thumbnail:
      "/editrix.png",
  },
  {
    title: "Pixel Perfect",
    // link: "https://app.pixelperfect.quest",
    link: "",
    thumbnail:
      "/pixelperfect.png",
  },

  {
    title: "Algochurn",
    // link: "https://algochurn.com",
    link: "",
    thumbnail:
      "/algochurn.png",
  },
  {
    title: "Aceternity UI",
    // link: "https://ui.aceternity.com",
    link: "",
    thumbnail:
      "/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    // link: "https://tailwindmasterkit.com",
    link: "",
    thumbnail:
      "/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    // link: "https://smartbridgetech.com",
    link: "/",
    thumbnail:
      "/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    // link: "https://renderwork.studio",
    link: "/",
    thumbnail:
      "/renderwork.png",
  },

  {
    title: "Creme Digital",
    // link: "https://cremedigital.com",
    link: "/",
    thumbnail:
      "/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    // link: "https://goldenbellsacademy.com",
    link: "/",
    thumbnail:
      "/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    // link: "https://invoker.lol",
    link: "/",
    thumbnail:
      "/invoker.png",
  },
  {
    title: "E Free Invoice",
    // link: "https://efreeinvoice.com",
    link: "/",
    thumbnail:
      "/efreeinvoice.png",
  },
];

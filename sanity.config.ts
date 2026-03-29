"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { productSchema } from "@/sanity/schemas/product";

export default defineConfig({
  name: "covenant-leather-co",
  title: "Covenant Leather Co.",
  projectId: "g3ey8k4o",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [productSchema],
  },
});

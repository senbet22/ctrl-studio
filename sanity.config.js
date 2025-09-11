"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Correct paths
import { apiVersion, dataset, projectId } from "./env.js";
import { schema } from "./schemaTypes.js";
import { structure } from "./structure.js";

export default defineConfig({
  basePath: "/cms",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

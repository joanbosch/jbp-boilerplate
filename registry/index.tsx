import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  "awesome-card": {
    name: "awesome-card",
    type: "components:ui",
    files: ["registry/components/ui/awesome-card.tsx"],
  },
  "balancer": {
    name: "balancer",
    type: "components:ui",
    files: ["registry/components/ui/balancer.tsx"],
  },
  "marquee": {
    name: "marquee",
    type: "components:ui",
    files: ["registry/components/ui/marquee.tsx"],
  }
};

const example: Registry = {
  "awesome-card-demo": {
    name: "awesome-card-demo",
    type: "components:example",
    registryDependencies: ["awesome-card"],
    files: ["registry/components/example/awesome-card-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/awesome-card-demo"),
    ),
  },
  "balancer-demo": {
    name: "balancer-demo",
    type: "components:example",
    registryDependencies: ["balancer"],
    files: ["registry/components/example/balancer-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/balancer-demo"),
    ),
  },
  "marquee-demo": {
    name: "marquee-demo",
    type: "components:example",
    registryDependencies: ["marquee"],
    files: ["registry/components/example/marquee-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/marquee-demo"),
    ),
  }
};
export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);

"use client";

import dynamic from "next/dynamic";

const WireframeSphere = dynamic(() => import("./WireframeSphere"), {
  ssr: false,
  loading: () => <div />,
});

export default WireframeSphere;

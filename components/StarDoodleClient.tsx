"use client";

import dynamic from "next/dynamic";

const StarDoodle = dynamic(() => import("./StarDoodle"), {
  ssr: false,
  loading: () => <div />,
});

export default StarDoodle;

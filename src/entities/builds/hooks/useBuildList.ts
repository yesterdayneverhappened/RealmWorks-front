"use client";

import { useQuery } from "@tanstack/react-query";
import { getBuilds } from "../api/get-builds";

export function useBuilds() {
  return useQuery({
    queryKey: ["build"],
    queryFn: () => getBuilds(),
  });
}

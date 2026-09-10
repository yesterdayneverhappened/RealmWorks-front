"use client";

import { useQuery } from "@tanstack/react-query";
import { getBuild } from "../api/get-build";

export function useBuild(id: string) {
  return useQuery({
    queryKey: ["build", id],
    queryFn: () => getBuild(id),
    enabled: !!id,
  });
}

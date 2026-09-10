import { apiClient } from "@/shared/api/client";
import type { Build } from "../types/build";

export async function getBuild(id: string): Promise<Build> {
  const { data } = await apiClient.get<Build>(`/builds/${id}`);

  return data;
}

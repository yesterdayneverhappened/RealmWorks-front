import { apiClient } from "@/shared/api/client";
import type { Build } from "../types/build";

export async function getBuilds(): Promise<Build> {
  const { data } = await apiClient.get<Build>(`/builds`);

  return data;
}

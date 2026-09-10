export interface Build {
  id: string;
  title: string;
  description: string;
  photos: string[];
  schematicUrl: string | null;
  userId: string;
  categoryId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BuildsResponse {
  builds: Build[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export const routes = {
  home: "/",
  video: (id: string) => `/video/${id}`,
} as const;

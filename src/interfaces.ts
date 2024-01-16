export interface Listener {
  indicator: string;
  playedMs: number;
  position: number;
  streams: number;
  user: User;
}

export interface User {
  displayName: string;
  id: string;
  image: string;
  recentlyActive: boolean;
}

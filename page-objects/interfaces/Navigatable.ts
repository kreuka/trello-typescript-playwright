export interface Navigatable {
  pagePath: string;
  navigate(url?: string): Promise<void>
}

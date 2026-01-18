
export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCard {
  tag: string;
  title: string;
  description: string;
  variant?: 'light' | 'dark' | 'primary';
  colSpan?: string;
  height?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

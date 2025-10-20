export interface UserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
  _meta: Meta;
}

export interface Meta {
  powered_by: string;
  upgrade_url: string;
  docs_url: string;
  template_gallery: string;
  message: string;
  features: string[];
  upgrade_cta: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}


export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    authorName: string;
    category: string;
    readTime: string;
    featuredImage: string;
    isFeatured: boolean;
    createdAt: string;
}

const VITE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function getPublishedPosts(category?: string, limit?: number): Promise<BlogPost[]> {
    let url = `${VITE_API_URL}/api/blog/public`;
    const params = new URLSearchParams();
    if (category && category !== 'All Stories') params.append('category', category);
    if (limit) params.append('limit', limit.toString());

    if (params.toString()) url += `?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch blog posts');
    return await response.json();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const response = await fetch(`${VITE_API_URL}/api/blog/public?slug=${slug}`);

    if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch blog post');
    }
    return await response.json();
}

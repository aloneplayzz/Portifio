import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import type { Post } from "@shared/schema";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ["/api/posts", slug],
    queryFn: () => fetch(`/api/posts/${slug}`).then(res => {
      if (!res.ok) throw new Error("Post not found");
      return res.json();
    }),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-32 mb-8"></div>
            <div className="h-12 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <Link href="/blog" className="inline-block mb-8 text-primary hover:text-primary/80 transition-colors">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <div className="py-16">
              <i className="fas fa-exclamation-triangle text-6xl text-muted-foreground mb-4"></i>
              <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
              <p className="text-muted-foreground">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="blog-post-page">
      <div className="container mx-auto px-6 py-20">
        {/* Navigation */}
        <Link 
          href="/blog" 
          className="inline-block mb-8 text-primary hover:text-primary/80 transition-colors"
          data-testid="link-back-to-blog"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="post-title">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <span data-testid="post-date">
              <i className="fas fa-calendar mr-2"></i>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            
            {post.updatedAt !== post.createdAt && (
              <span data-testid="post-updated">
                <i className="fas fa-edit mr-2"></i>
                Updated {new Date(post.updatedAt).toLocaleDateString()}
              </span>
            )}
          </div>

          <p className="text-lg text-muted-foreground mb-6" data-testid="post-description">
            {post.description}
          </p>

          {/* Technologies */}
          {post.technologies && post.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6" data-testid="post-technologies">
              {post.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project Links */}
          <div className="flex gap-4">
            {post.projectUrl && (
              <a
                href={post.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="link-live-demo"
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}
            
            {post.githubUrl && (
              <a
                href={post.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                data-testid="link-github"
              >
                <i className="fab fa-github"></i>
                View Code
              </a>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.imageUrl && (
          <div className="mb-12">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              data-testid="post-featured-image"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none" data-testid="post-content">
          <div 
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground">
              <p>Thanks for reading! Feel free to reach out if you have any questions.</p>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="link-contact"
              >
                <i className="fas fa-envelope"></i>
                Get in Touch
              </Link>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                data-testid="link-more-posts"
              >
                <i className="fas fa-arrow-right"></i>
                More Posts
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
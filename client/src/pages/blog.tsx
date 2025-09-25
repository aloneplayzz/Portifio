import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Post } from "@shared/schema";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts", { published: true }],
    queryFn: () => fetch("/api/posts?published=true").then(res => res.json()),
  });

  const { data: featuredPosts = [] } = useQuery<Post[]>({
    queryKey: ["/api/posts/featured"],
    queryFn: () => fetch("/api/posts/featured").then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="blog-page">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-8 text-primary hover:text-primary/80 transition-colors" data-testid="link-home">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="blog-title">
            Portfolio & Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="blog-description">
            Showcasing my latest projects, technical insights, and development journey.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8" data-testid="featured-projects-title">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                  data-testid={`featured-post-${post.slug}`}
                >
                  <article className="bg-card rounded-xl overflow-hidden hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        data-testid={`featured-post-image-${post.slug}`}
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.technologies?.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                        <div className="flex gap-2">
                          {post.projectUrl && (
                            <a
                              href={post.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fas fa-external-link-alt"></i>
                            </a>
                          )}
                          {post.githubUrl && (
                            <a
                              href={post.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <i className="fab fa-github"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8" data-testid="all-posts-title">
            All Posts
          </h2>
          
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-code text-6xl text-muted-foreground mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
              <p className="text-muted-foreground">
                Check back soon for new projects and insights!
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                  data-testid={`post-${post.slug}`}
                >
                  <article className="bg-card rounded-xl p-6 hover:bg-accent transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      {post.imageUrl && (
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                          data-testid={`post-image-${post.slug}`}
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.technologies?.map((tech) => (
                            <span
                              key={tech}
                              className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                          <div className="flex gap-2">
                            {post.projectUrl && (
                              <a
                                href={post.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <i className="fas fa-external-link-alt"></i>
                              </a>
                            )}
                            {post.githubUrl && (
                              <a
                                href={post.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <i className="fab fa-github"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
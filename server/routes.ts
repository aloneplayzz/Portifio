import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertPostSchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for Render
  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      console.error("Contact form submission error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get contact submissions (admin only)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  // Mark contact submission as read
  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      await storage.markContactSubmissionAsRead(req.params.id);
      res.json({ message: "Contact submission marked as read" });
    } catch (error) {
      console.error("Error marking contact submission as read:", error);
      res.status(500).json({ error: "Failed to update contact submission" });
    }
  });

  // Blog/Portfolio posts routes
  app.get("/api/posts", async (req, res) => {
    try {
      const publishedOnly = req.query.published === "true";
      const posts = await storage.getPosts(publishedOnly);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/featured", async (req, res) => {
    try {
      const posts = await storage.getFeaturedPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching featured posts:", error);
      res.status(500).json({ error: "Failed to fetch featured posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const validatedData = insertPostSchema.parse(req.body);
      const post = await storage.createPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid post data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create post" });
      }
    }
  });

  app.put("/api/posts/:id", async (req, res) => {
    try {
      const validatedData = insertPostSchema.partial().parse(req.body);
      const post = await storage.updatePost(req.params.id, validatedData);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error updating post:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid post data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to update post" });
      }
    }
  });

  app.delete("/api/posts/:id", async (req, res) => {
    try {
      await storage.deletePost(req.params.id);
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Failed to delete post" });
    }
  });

  // Testimonials routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const approvedOnly = req.query.approved === "true";
      const testimonials = await storage.getTestimonials(approvedOnly);
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.get("/api/testimonials/featured", async (req, res) => {
    try {
      const testimonials = await storage.getFeaturedTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching featured testimonials:", error);
      res.status(500).json({ error: "Failed to fetch featured testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid testimonial data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create testimonial" });
      }
    }
  });

  app.put("/api/testimonials/:id", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.partial().parse(req.body);
      const testimonial = await storage.updateTestimonial(req.params.id, validatedData);
      if (!testimonial) {
        return res.status(404).json({ error: "Testimonial not found" });
      }
      res.json(testimonial);
    } catch (error) {
      console.error("Error updating testimonial:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid testimonial data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to update testimonial" });
      }
    }
  });

  app.delete("/api/testimonials/:id", async (req, res) => {
    try {
      await storage.deleteTestimonial(req.params.id);
      res.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({ error: "Failed to delete testimonial" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

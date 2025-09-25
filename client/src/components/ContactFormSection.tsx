import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

const features = [
  "Custom solutions tailored to your specific needs",
  "Clean, efficient code that's built to last",
  "Clear communication throughout the project",
  "Competitive rates with flexible payment options",
  "Fast turnaround times for critical projects",
  "Ongoing support and maintenance options"
];

export default function ContactFormSection() {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(res => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
      }),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setShowForm(false);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="py-20 px-6 bg-card/30" data-testid="contact-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="contact-title">Hire Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your vision to life? I'm currently available for new projects. Choose your preferred contact method below!
          </p>
        </div>

        {!showForm && (
          <>
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a 
                href="https://discordapp.com/users/931059762173464597" 
                className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
                data-testid="contact-discord"
              >
                <i className="fab fa-discord text-5xl text-chart-1 mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-xl font-semibold mb-2">Discord</h3>
                <p className="text-muted-foreground">risin777</p>
              </a>

              <a 
                href="https://github.com/risin77" 
                className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
                data-testid="contact-github"
              >
                <i className="fab fa-github text-5xl text-foreground mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground">risin77</p>
              </a>

              <button 
                onClick={() => setShowForm(true)}
                className="bg-card rounded-xl p-8 text-center hover:bg-accent transition-all duration-300 transform hover:scale-105 group"
                data-testid="contact-form-button"
              >
                <i className="fas fa-envelope text-5xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
                <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
                <p className="text-muted-foreground">Send me a message</p>
              </button>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
                  <i className="fas fa-check text-chart-2"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {showForm && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Send me a message</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-form-button"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your.email@example.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Project inquiry, collaboration, etc." 
                            {...field} 
                            data-testid="input-subject"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project, goals, timeline, budget, or any questions you have..."
                            className="min-h-[120px]"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="flex-1"
                      data-testid="button-submit"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowForm(false)}
                      data-testid="button-cancel"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
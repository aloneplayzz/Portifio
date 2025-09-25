export default function ProfileSection() {
  return (
    <header className="w-full relative" data-testid="profile-section">
      {/* Animated Banner */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=400" 
          alt="Animated coding banner with matrix effects" 
          className="w-full h-full object-cover"
          data-testid="banner-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* Profile Avatar */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&h=512" 
              alt="RISIN developer avatar" 
              className="w-32 h-32 rounded-full border-4 border-primary shadow-lg animate-float mb-6"
              data-testid="profile-avatar"
            />
            
            {/* Developer Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text animate-fade-in" data-testid="developer-name">
              RISIN
            </h1>
            
            {/* Bio */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up" data-testid="developer-bio">
              Crafting beautiful experiences with clean code and creative solutions. Specializing in modern frontend development with a focus on performance and user experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <button 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-know-about-me"
              >
                Know About Me
              </button>
              <button 
                className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                data-testid="button-contact-me"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

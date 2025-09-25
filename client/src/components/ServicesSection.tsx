export default function ServicesSection() {
  return (
    <section className="py-20 px-6" data-testid="services-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="services-title">Services I offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="services-description">
            Specialized development services tailored to bring your digital vision to life with cutting-edge technology and exceptional design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Discord Bot Development */}
          <div className="bg-card rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105" data-testid="service-discord-bot">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <i className="fab fa-discord text-3xl text-chart-1 mr-4"></i>
                <h3 className="text-2xl font-semibold">Discord Bot Development</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Custom Discord bots with powerful features to enhance your community experience, moderation capabilities, and engagement.
              </p>
            </div>
            
            {/* Discord Bot Mockup */}
            <div className="bg-muted/50 p-6 m-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-destructive rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-chart-3 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                <span className="ml-auto text-sm text-muted-foreground">Dev Server</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground"># general</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground"># bot-commands</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-muted-foreground"># announcements</span>
                </div>
              </div>
              <div className="bg-background rounded p-3">
                <div className="flex items-center text-sm mb-2">
                  <span className="text-primary font-semibold mr-2">You</span>
                  <span className="text-muted-foreground">general</span>
                </div>
                <p className="text-sm">Try sending a command like !help</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Custom command & events integration
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Discord.js & Discord API expertise
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  AI & database integration options
                </li>
              </ul>
            </div>
          </div>

          {/* Web App Development */}
          <div className="bg-card rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105" data-testid="service-web-app">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <i className="fas fa-globe text-3xl text-chart-2 mr-4"></i>
                <h3 className="text-2xl font-semibold">Web App Development</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modern, responsive web applications built with the latest technologies and frameworks for exceptional user experiences across all devices.
              </p>
            </div>

            {/* Web App Mockup */}
            <div className="bg-muted/50 p-6 m-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-3 rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                </div>
                <div className="ml-4 bg-background rounded-full px-3 py-1 text-xs">
                  https://myapp.example.com
                </div>
              </div>
              <div className="bg-background rounded-lg p-4">
                <nav className="flex items-center justify-between mb-4 pb-2 border-b border-border">
                  <h4 className="font-semibold text-primary">MyApp</h4>
                  <div className="flex space-x-4 text-xs">
                    <span>Home</span>
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Contact</span>
                  </div>
                </nav>
                <div className="text-center py-8">
                  <h5 className="font-semibold mb-2">Hero Content</h5>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-muted rounded h-8 text-xs flex items-center justify-center">Feature 1</div>
                    <div className="bg-muted rounded h-8 text-xs flex items-center justify-center">Feature 2</div>
                    <div className="bg-muted rounded h-8 text-xs flex items-center justify-center">Feature 3</div>
                  </div>
                </div>
                <footer className="text-center text-xs text-muted-foreground pt-2 border-t border-border">
                  © MyApp 2025
                </footer>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded">Mobile</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded">Desktop</span>
              </div>
            </div>

            <div className="p-6 pt-0">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Responsive & cross-browser compatible designs
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Full-stack development with modern frameworks
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Database design and API integration
                </li>
              </ul>
            </div>
          </div>

          {/* Native App Development */}
          <div className="bg-card rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105" data-testid="service-native-app">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <i className="fas fa-mobile-alt text-3xl text-chart-4 mr-4"></i>
                <h3 className="text-2xl font-semibold">Native App Development</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                High-performance native mobile applications for iOS and Android platforms, delivering seamless user experiences with device-specific features.
              </p>
            </div>

            {/* Native App Mockup */}
            <div className="bg-muted/50 p-6 m-6 rounded-lg border border-border">
              <div className="bg-background rounded-2xl p-4 max-w-xs mx-auto">
                <div className="text-center mb-4">
                  <h5 className="font-semibold mb-2">Tic-tac-toe</h5>
                  <div className="grid grid-cols-3 gap-1 w-24 mx-auto">
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">X</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">O</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">X</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">O</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">X</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">O</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">X</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">O</div>
                    <div className="bg-muted aspect-square rounded text-xs flex items-center justify-center">X</div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs mt-4">
                    Play Game
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-sm font-medium mb-2">Platform Compatibility</h6>
                <div className="flex justify-center space-x-4 text-xs">
                  <span className="bg-background px-2 py-1 rounded">iOS</span>
                  <span className="bg-background px-2 py-1 rounded">Android</span>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded">React Native</span>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="text-sm font-medium mb-2">Technologies Used</h6>
                <div className="flex justify-center space-x-2">
                  <span className="bg-chart-1 text-white px-2 py-1 rounded text-xs">React Native</span>
                  <span className="bg-chart-3 text-white px-2 py-1 rounded text-xs">Firebase</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Cross-platform development with React Native
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  Native performance and device integration
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-chart-2 mr-2"></i>
                  App Store and Play Store deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

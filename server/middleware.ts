import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

export function setupMiddleware(app: express.Express) {
  // Security headers
  app.use(helmet());
  
  // CORS configuration
  app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.CORS_ORIGIN || false
      : 'http://localhost:5000',
    credentials: true
  }));

  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Request logging
  app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      const logLine = `${req.method} ${req.path} ${res.statusCode} ${duration}ms`;
      console.log(logLine);
    });
    next();
  });
}
// Production deployment: the dashboard is served by CloudFront and API requests
// go to the same CloudFront domain (which forwards /api/*, /health, /web/* and
// /longpolling/* to the ALB). An empty string makes the app use relative URLs.
// For local development point this at your local API, e.g. "http://localhost:3000". No trailing slash.
window.CREDIFY_API = "";

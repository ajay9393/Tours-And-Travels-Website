{
  "version": 2,
  "builds": [
    {
      "src": "./frontend/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}

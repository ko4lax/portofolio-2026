module.exports = {
  apps: [
    {
      name: 'portofolio-2026',
      cwd: '/root/projects/portofolio-2026',
      script: 'node_modules/next/dist/bin/next',
      args: 'start --hostname 127.0.0.1',
      env: {
        PORT: 3459,
        NODE_ENV: 'production',
        HOSTNAME: '127.0.0.1',
      },
    },
  ],
};

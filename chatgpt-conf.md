To run two separate Docker apps with different domains on the same Ubuntu server, you'll need to modify your `docker-compose.yml` and `nginx.conf` files accordingly. Here's a guide on how to achieve this:

- Create two separate folders for each app, let's say `app1` and `app2`. Place your Nuxt.js and Strapi apps for each domain in their respective folders.
- Modify the `docker-compose.yml` file for each app. Update the `nginx` service to expose different ports, for example, `8080` for `app1` and `8081` for `app2`. You should also give each app a unique network name, e.g., `app1_network` and `app2_network`. Here's an example for `app1`:

```yaml
version: '3'
services:

  nginx:
    build: ./nginx
    ports:
      - "8080:80"
    depends_on:
      - backend
      - frontend
    networks:
      - app1_network
  
  # ... other services ...

networks:
  app1_network:
    driver: bridge
```

- Modify the `nginx.conf` file in the `nginx` folder of each app to set the correct `server_name`. For example, for `app1`, set `server_name nsd.newtablab.com;`, and for `app2`, set `server_name www.newstablab.com;`.
- Install Nginx on your Ubuntu server, if it's not already installed:

```bash
sudo apt update
sudo apt install nginx
```

- Create a new Nginx configuration file `/etc/nginx/sites-available/reverse-proxy.conf` with the following content:

```nginx
http {
  upstream app1 {
    server localhost:8080;
  }

  upstream app2 {
    server localhost:8081;
  }

  server {
    listen 80;
    server_name nsd.newtablab.com;
    
    location / {
      proxy_pass http://app1;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
  }

  server {
    listen 80;
    server_name www.newstablab.com;

    location / {
      proxy_pass http://app2;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }
  }
}
```

- Create a symbolic link to enable the configuration:

```bash
sudo ln -s /etc/nginx/sites-available/reverse-proxy.conf /etc/nginx/sites-enabled/
```

- Remove the `default` configuration:

```bash
sudo rm /etc/nginx/sites-enabled/default
```

- Restart Nginx:

```bash
sudo systemctl restart nginx
```

- Start both Docker apps by running `docker-compose up -d` in their respective directories (`app1` and `app2`).

Now, your Nuxt.js and Strapi apps should be accessible at `nsd.newtablab.com` and `www.newstablab.com`.
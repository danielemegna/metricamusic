# Metrica Music

![logo](./material/logo-first.png)

## Dev Notes

```
$ docker build -t metricamusic .
$ docker run --rm -dp 99:80 --name metricamusic metricamusic
```

or

```
$ docker run --rm -itp 99:80 -v $PWD:/usr/share/nginx/html/ nginx:alpine
$ docker run --rm -itp 99:99 -v $PWD/nginx.default.conf:/etc/nginx/conf.d/default.conf -v $PWD:/usr/share/nginx/html/ nginx:alpine
```

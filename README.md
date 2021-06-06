# Metrica Music

![logo](logo.png)

## Dev Notes

```
$ docker build -t metricamusic .
$ docker run --rm -dp 99:80 --name metricamusic metricamusic
```

or

```
$ docker run --rm -itp 99:80 -v $PWD:/usr/share/nginx/html/ nginx:alpine
```

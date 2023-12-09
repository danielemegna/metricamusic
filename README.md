# Metrica Music

![logo](./material/logo-first.png)

## Dev Notes

Build image and run:

```
$ docker build -t metricamusic .
$ docker run --rm -dp 99:80 --name metricamusic metricamusic
```

> to run with mounted mp3 volume see `up-with-volumes` script

Dev mode (without image build):

```
$ docker run --rm -itp 99:80 -v $PWD:/usr/share/nginx/html/ nginx:alpine
$ docker run --rm -itp 99:80 -v $PWD/nginx.default.conf:/etc/nginx/conf.d/default.conf -v $PWD:/usr/share/nginx/html/ nginx:alpine
```

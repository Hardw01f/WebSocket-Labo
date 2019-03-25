

## SetUp

```
$ docker build -t [TagName] .

$ docker run -p 9999:9090 -v [MountDir]:/go_ws --name [containerName] -it [TagName] sh

```

### Into Container

```
$ sh setup.sh

$ go run echoserver.go

```


### verification at local

```
$ npm install wscat

$ wscat -c ws://localhost:9999/echo -o localhost:9090


```



## SetUp

```
$ docker build -t [TagName] .

$ docker run -p 9090:3000 -v [MountDir]:/ws --name [containerName] -it [TagName] sh

```

### Into Container

```
$ sh setup.sh

$ node index.js

```


### verification at local

- access "http://localhost:9999" at browser

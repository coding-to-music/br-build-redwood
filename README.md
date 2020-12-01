
README.md

# Perform the actions to create a working website
&nbsp;

## Big Picture
- Go call API
- Vue call API
- Vue call Go

&nbsp;

## Features and Status
| Feature       | Status        | Where | Comment           |
| ------------- |:-------------:|:-----:|:-----:|
| Go Hello World on Console     | Works | console | go run server.go  |
| Go Hello World from Go server | Works | localhost:3000 | go run main.go  |
| Vue Hello World      | Works | localhost:8080 | yarn serve  |
| Go Hello World from Go server with color | TBD | localhost:3000 | TBD  |
| Color in the text of this readme | TBD | TBD | TBD  |
| Vue call API directly     | TBD | TBD | TBD  |
| Go be API reciever     | TBD | TBD | TBD  |
| Go call API      | TBD | TBD | TBD  |
| Go be middleman for Vue     | TBD | TBD | TBD  |
| Vue call Go     | TBD | TBD | TBD  |
| Vue dark mode     | TBD | TBD | TBD  |
| Vue call time or weather     | TBD | TBD | TBD  |
| Go call time or weather     | TBD | TBD | TBD  |
| Go be middleman for Vue time/weather | TBD | TBD | TBD  |
| Save to a database | TBD | TBD | TBD  |
| Logging | TBD | TBD | TBD  |
| Telemetry | TBD | TBD | TBD  |



&nbsp;

## Task List
 [x] Go Hello World on Console

 [x] Go Hello World from Go server

 [x] Vue Hello World

 [ ] Vue call API directly

 [ ] Go be API reciever

 [ ] Go call API

 [ ] Go be middleman for Vue

 [ ] Vue call Go

 [ ] Vue dark mode

 [ ] Vue call time or weather

 [ ] Go call time or weather

 [ ] Go be middleman for Vue time/weather

&nbsp;

## Installation: clone this directory

```bash
npm install
```

## performs the tasks usually done by a programmer at a keyboard

&nbsp;

### run the script via 

&nbsp;

```bash


npm run all-site

cd aprojects/go-vue-snapshot
go run main.go server.go

cd aprojects/go-vue-snapshot/frontend
yarn serve


```

## after running the script, you can put the resulting directory into a repo

```bash

connorstom@penguin:~/aprojects/go-vue-snapshot$ git init .
connorstom@penguin:~/aprojects/go-vue-snapshot$ git remote rm origin
connorstom@penguin:~/aprojects/go-vue-snapshot$ git remote -v
origin  git@github.com:coding-to-music/go-vue-snapshot.git (fetch)
origin  git@github.com:coding-to-music/go-vue-snapshot.git (push)
connorstom@penguin:~/aprojects/go-vue-snapshot$ git remote add origin git@github.com:coding-to-music/go-vue-snapshot2.git
connorstom@penguin:~/aprojects/go-vue-snapshot$ git commit -m 'ver 5.3 update App.vue'
connorstom@penguin:~/aprojects/go-vue-snapshot$ git push --set-upstream origin master
connorstom@penguin:~/aprojects/go-vue-snapshot$ git push -u origin main
```

## uses an example app built by following this article

## A full app using the Vue 3 Composition API

https://levelup.gitconnected.com/developing-a-full-app-using-the-vue-3-composition-api-4fd9431f2136


run the script via 

```bash

npm run js-add 2 3
```

## Scripting inside package.json
https://medium.com/@krishankantsinghal/scripting-inside-package-json-4b06bea74c0e

```bash

npm run js-add 2 3
```

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

```bash
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

# Listening on port 2222
sudo lsof -T | grep 2222

netstat -tulpn

connorstom@penguin:~/aprojects/br-build-site$ sudo lsof -T | grep 2222
sshd        95                      root    3u     IPv4               2712       0t0     TCP *:2222
sshd        95                      root    4u     IPv6               2720       0t0     TCP *:2222
sshd       212                      root    3u     IPv4               6211       0t0     TCP penguin.lxd:2222->100.115.92.25:43998
sshd       221                connorstom    3u     IPv4               6211       0t0     TCP penguin.lxd:2222->100.115.92.25:43998

connorstom@penguin:~/aprojects/br-build-site$ netstat -tulpn
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:2222            0.0.0.0:*               LISTEN      -                   
tcp6       0      0 :::2222                 :::*                    LISTEN      -                   
udp        0      0 0.0.0.0:68              0.0.0.0:*                           -    
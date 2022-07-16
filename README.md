# File Server

a simple file server

一个简单的文件服务器

会在当前文件夹中创建一个文件服务，可以通过浏览器访问，默认为`1234`端口，可以通过命令行参数修改端口

## Download

[https://github.com/newpanjing/file_server/releases](https://github.com/newpanjing/file_server/releases)

## Preview

![preview](./imgs/preview.gif)

## Usage

### Run

```bash
go run main.go
```

### Build

```bash
go build main.go
```

### Run with port

```bash
./fs --host=127.0.0.1:1234
```

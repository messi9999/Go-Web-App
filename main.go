package main

import (
	"flag"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	router := httprouter.New()
	//获取当前目录

	var host string

	//解析命令行参数
	flag.StringVar(&host, "host", "127.0.0.1:1234", "监听地址")
	flag.Parse()

	dir, err := filepath.Abs(filepath.Dir(os.Args[0]))
	if err != nil {
		log.Fatal(err)
	}

	//设置静态文件目录
	router.ServeFiles("/*filepath", http.Dir(dir))
	log.Printf("server start at http://%s", host)
	err = http.ListenAndServe(host, router)
	if err != nil {
		log.Fatal(err)
	}
}

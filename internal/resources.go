package internal

import (
	"os"
)

var ResourcesDir = ""

func init() {
	resDir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	ResourcesDir = resDir + "/resources/"
}

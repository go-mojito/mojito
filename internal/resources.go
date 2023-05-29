package internal

import (
	"os"
)

var ResourcesDirVal = ""

func ResourcesDir() string {
	if ResourcesDirVal == "" {
		resDir, err := os.Getwd()
		if err != nil {
			panic(err)
		}
		ResourcesDirVal = resDir + "/resources/"
	}
	return ResourcesDirVal
}

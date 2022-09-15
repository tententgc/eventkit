all: run

run:
	go run ./main.go

build:
	env GOOS=linux GOARCH=amd64 go build -o ./local/backend .

build-nocgo:
	env CGO_ENABLED=0 go build -o ./local/backend-nocgo .

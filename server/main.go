package main

import (
	"backend/loaders/fiber"
	"backend/loaders/memory"
)

func main() {
	memory.Init()
	fiber.Init()
}

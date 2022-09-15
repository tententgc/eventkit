package leaderboard

import "github.com/gofiber/fiber/v2"

func GetInfoHandler(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}

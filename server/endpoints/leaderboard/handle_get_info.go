package leaderboard

import (
	"github.com/gofiber/fiber/v2"

	"backend/loaders/memory"
)

func GetInfoHandler(c *fiber.Ctx) error {
	return c.JSON(memory.Leaderboards)
}

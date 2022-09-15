package endpoints

import (
	"github.com/gofiber/fiber/v2"

	leaderboardEndpoint "backend/endpoints/leaderboard"
)

func Register(router fiber.Router) {
	leaderboard := router.Group("leaderboard/")
	leaderboard.Get("info", leaderboardEndpoint.GetInfoHandler)
	leaderboard.Patch("info", leaderboardEndpoint.PatchInfoHandler)
}

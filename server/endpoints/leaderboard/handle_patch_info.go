package leaderboard

import (
	"encoding/json"
	"os"
	"sort"

	"github.com/gofiber/fiber/v2"

	"backend/loaders/memory"
	"backend/types/payload"
	"backend/utils/text"
)

func PatchInfoHandler(c *fiber.Ctx) error {
	// Parse body
	var body []*payload.LeaderboardItem
	if err := c.BodyParser(&body); err != nil {
		return err
	}

	// Validate body
	for _, item := range body {
		if err := text.Validator.Struct(item); err != nil {
			return err
		}
	}

	// Sort leaderboard score
	sort.Slice(body, func(i, j int) bool {
		return *body[i].Score < *body[j].Score
	})

	// Update leaderboard
	memory.Leaderboards = body

	// Write to file
	var bytes []byte
	var err error
	if bytes, err = json.Marshal(body); err != nil {
		return err
	}

	var file *os.File
	if file, err = os.Create(memory.LeaderboardFile); err != nil {
		return err
	}

	if _, err = file.Write(bytes); err != nil {
		return err
	}

	return c.SendString("OK")
}

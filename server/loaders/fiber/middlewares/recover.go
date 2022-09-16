package middlewares

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/recover"

	"backend/utils/config"
)

var Recover = func() fiber.Handler {
	if config.C.Environment == config.EnvironmentDev {
		return func(ctx *fiber.Ctx) error {
			return ctx.Next()
		}
	}

	return recover.New()
}()

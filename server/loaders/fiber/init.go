package fiber

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"

	"backend/endpoints"

	"backend/utils/config"

	"backend/loaders/fiber/middlewares"
)

var app *fiber.App

func Init() {
	// Initialize fiber instance
	app = fiber.New(fiber.Config{
		ErrorHandler: func(ctx *fiber.Ctx, err error) error {
			return ctx.Status(fiber.StatusInternalServerError).SendString(err.Error())
		},
		Prefork:       false,
		StrictRouting: true,
		ReadTimeout:   5 * time.Second,
		WriteTimeout:  5 * time.Second,
	})

	// Init API endpoints
	apiGroup := app.Group("api/")

	apiGroup.Use(middlewares.Limiter)
	apiGroup.Use(middlewares.Cors)
	apiGroup.Use(middlewares.Recover)

	endpoints.Register(apiGroup)

	// Init not found handler
	app.Use(func(ctx *fiber.Ctx) error {
		return ctx.Status(fiber.StatusNotFound).SendString("404_NOT_FOUND")
	})

	// Startup
	err := app.Listen(config.C.Address)
	if err != nil {
		logrus.Fatal(err.Error())
	}
}

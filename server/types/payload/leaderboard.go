package payload

type LeaderboardItem struct {
	Name  *string `json:"name" validate:"required"`
	Score *int    `json:"score" validate:"required"`
}

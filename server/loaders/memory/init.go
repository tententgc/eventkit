package memory

import (
	"encoding/json"
	"io/ioutil"
	"os"

	"github.com/sirupsen/logrus"

	"backend/types/payload"
)

var Leaderboards []*payload.LeaderboardItem

const LeaderboardFile = "./leaderboard.json"

func Init() {
	if _, err := os.Stat(LeaderboardFile); os.IsNotExist(err) {
		logrus.Fatal("NONEXISTENT LEADERBOARD FILE: ./leaderboard.json")
	}

	lb, err := ioutil.ReadFile(LeaderboardFile)
	if err != nil {
		logrus.Fatal("UNABLE TO READ YAML CONFIGURATION FILE")
	}

	if err := json.Unmarshal(lb, &Leaderboards); err != nil {
		logrus.Fatal("UNABLE TO PARSE LEADERBOARD FILE")
	}
}

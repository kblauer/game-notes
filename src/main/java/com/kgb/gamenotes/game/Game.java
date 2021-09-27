package com.kgb.gamenotes.game;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Game {
    private String gameTitle;
    private String gameID;
    private String gameProvider;
}

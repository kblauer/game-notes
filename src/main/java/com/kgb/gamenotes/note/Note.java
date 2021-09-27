package com.kgb.gamenotes.note;

import com.kgb.gamenotes.game.Game;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Note {
    @Id
    private String id;
    private String noteTitle;
    private String noteDescription;
    private String noteContent;
    private Game game;

    public Note(String noteTitle, String noteDescription, String noteContent, Game game) {
        this.noteTitle = noteTitle;
        this.noteDescription = noteDescription;
        this.noteContent = noteContent;
        this.game = game;
    }
}

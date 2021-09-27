package com.kgb.gamenotes;

import com.kgb.gamenotes.game.Game;
import com.kgb.gamenotes.note.Note;
import com.kgb.gamenotes.note.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Slf4j
public class GameNotesApplication {

    public static void main(String[] args) {
        SpringApplication.run(GameNotesApplication.class, args);
    }

/*    @Bean
    CommandLineRunner runner(NoteRepository repository) {
        return args -> {
            Game game = new Game(
                    "Game for Loozers",
                    "123",
                    "Steam"
            );

            Note note = new Note(
                    "loozer note 1",
                    "this is a note",
                    "wow such note content",
                    game
            );

            repository.insert(note);
        };
    }*/
}

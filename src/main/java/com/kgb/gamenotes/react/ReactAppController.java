package com.kgb.gamenotes.react;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j
public class ReactAppController {

    @RequestMapping(value = "{_:^(?!index\\.html|api|actuator).*$}")
    public String index() {
        return "index.html";
    }
}

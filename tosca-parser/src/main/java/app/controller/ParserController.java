package app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParserController {

    @GetMapping(path = "/static-graph", name = "static-graph", produces = "application/json")
    public String staticServiceGraph(){
        return null;
    }
}

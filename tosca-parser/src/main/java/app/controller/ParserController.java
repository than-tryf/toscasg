package app.controller;

import app.elk.ELKClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ParserController {

    @GetMapping(path = "/", name = "static-graph", produces = "application/json")
    public String staticServiceGraph(){
        RestHighLevelClient client = ELKClient.buildCLient("localhost",9200,"http");

        try {
            client.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return client.indices().toString();
    }
}

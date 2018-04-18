package app.controller;

import app.elk.ELKClient;
import org.apache.http.HttpHost;
import org.apache.http.RequestLine;
import org.apache.http.util.EntityUtils;
import org.elasticsearch.client.Response;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sun.misc.IOUtils;

import java.io.IOException;

@CrossOrigin
@RestController
public class ParserController {


    @GetMapping(path = "/", name = "static-graph", produces = "application/json")
    public String staticServiceGraph(){
//        RestHighLevelClient client = ELKClient.buildCLient("localhost",9200,"http");
        String body = "";
        try {
            RestClient client = RestClient.builder(new HttpHost("localhost", 9200, "http")).build();
            Response response = client.performRequest("GET", "/servicegraph/test/service1");
            RequestLine requestLine = response.getRequestLine();
            HttpHost host = response.getHost();
            body = EntityUtils.toString(response.getEntity());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return body;

    }
}

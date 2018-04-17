package app.elk;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;

import java.io.IOException;

public class ELKClient {

    private static final String HOSTNAME = "localhost";
    private static final String HTTP_PROTOCOL = "http";
    private static final String HTTPS_PROTOCOL = "https";
    private static final int ELASTIC_PORT = 9200;

    public ELKClient() {
        super();
    }

    public static RestHighLevelClient buildCLient(String hostname, int port, String scheme){
        RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(
                new HttpHost(hostname, port, scheme)));

        return client;
    }

    public static void killELKCLient(RestHighLevelClient client){
        try {
            client.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

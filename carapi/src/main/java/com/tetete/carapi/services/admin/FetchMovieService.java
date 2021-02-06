package com.tetete.carapi.services.admin;

import com.tetete.carapi.models.MovieAttributesResponse;
import com.tetete.carapi.models.enums.SourceMovieSite;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

@Service
public class FetchMovieService {

    public MovieAttributesResponse fetchMovie(String urlString)
            throws MalformedURLException, IOException
    {
        URL url = new URL(urlString);

        MovieAttributesResponse response = null;
        switch (url.getHost()) {
            case "jp.pornhub.com":
                response = fetchPornhub(urlString);
                break;
        }

        // 結果を判定する
        // 値を返す
        return response;
    }

    public MovieAttributesResponse fetchPornhub(String urlString) throws IOException {
        Document document = Jsoup.connect(urlString).get();
        String title = document.select("h1.title span").first().ownText();
        String embeddedUrl = "https://www.pornhub.com/embed/" + urlString.split("viewkey=")[1];

        return MovieAttributesResponse.builder()
                .title(title)
                .sourceUrl(urlString)
                .embeddedUrl(embeddedUrl)
                .sourceMovieSite(SourceMovieSite.PORNHUB)
                .build();
    }
}

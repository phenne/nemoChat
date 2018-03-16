package com.driusandilham.nemochat.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

import java.util.Collection;
import java.util.Collections;

/**
 * @author drius on 16.03.2018.
 */
@Configuration
@PropertySource("classpath:db.properties")
public class MongoConfig extends AbstractMongoConfiguration {

    @Value("${db.databaseName}")
    private String databaseName;

    @Value("${db.host}")
    private String host;

    @Value("${db.port}")
    private String port;

    @Override
    protected String getDatabaseName() {
        return databaseName;
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(host, Integer.parseInt(port));
    }

    @Override
    protected Collection<String> getMappingBasePackages() {
        return Collections.singletonList("com.driusandilham.nemochat.db.entity");
    }
}

package com.driusandilham.nemochat.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.authentication.UserCredentials;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;

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

    @Value("${db.username}")
    private String username;

    @Value("${db.password}")
    private String password;

    @Override
    protected String getDatabaseName() {
        return databaseName;
    }

    @Override
    public Mongo mongo() {
        return new MongoClient(host, Integer.parseInt(port));
    }

    @Override
    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongo(), getDatabaseName(), new UserCredentials(username, password));
    }

    @Override
    protected Collection<String> getMappingBasePackages() {
        return Collections.singletonList("com.driusandilham.nemochat.db.entity");
    }
}

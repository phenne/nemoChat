package com.driusandilham.nemochat.config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Collection;
import java.util.Collections;

/**
 * @author drius on 16.03.2018.
 */
@Configuration
@EnableMongoRepositories("com.driusandilham.nemochat.db.repository")
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
//        MongoCredential credential = MongoCredential.createCredential(username, getDatabaseName(), password.toCharArray());
        return new MongoClient(new ServerAddress(host, Integer.parseInt(port)));
    }

    @Override
    @Bean
    public MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongo(), getDatabaseName());
    }

    @Override
    protected Collection<String> getMappingBasePackages() {
        return Collections.singletonList("com.driusandilham.nemochat.db.entity");
    }
}

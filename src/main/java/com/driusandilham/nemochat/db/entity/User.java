package com.driusandilham.nemochat.db.entity;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author drius on 16.03.2018.
 */
@Document(collection = "user")
@Data
public class User {

    @Id
    private ObjectId id;
    private String userName;
}

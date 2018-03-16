package com.driusandilham.nemochat.db.entity;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * @author drius on 16.03.2018.
 */
@Data
@Document(collection = "dialog")
public class Dialog {

    @Id
    private ObjectId id;

    @DBRef
    private User dialogCreator;

    @DBRef
    private List<User> participants;
}

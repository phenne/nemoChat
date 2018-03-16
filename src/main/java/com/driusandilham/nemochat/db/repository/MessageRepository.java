package com.driusandilham.nemochat.db.repository;

import com.driusandilham.nemochat.db.entity.Message;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * @author drius on 16.03.2018.
 */
@Repository
public interface MessageRepository extends MongoRepository<Message, ObjectId> {
}

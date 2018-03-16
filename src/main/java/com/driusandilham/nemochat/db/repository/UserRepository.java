package com.driusandilham.nemochat.db.repository;

import com.driusandilham.nemochat.db.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * @author drius on 16.03.2018.
 */
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
}

package com.driusandilham.nemochat.db.repository;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author drius on 18.03.2018.
 */
@Repository
public interface DialogRepository extends MongoRepository<Dialog, ObjectId> {

    List<Dialog> findDialogByParticipantsContains(User user);
}

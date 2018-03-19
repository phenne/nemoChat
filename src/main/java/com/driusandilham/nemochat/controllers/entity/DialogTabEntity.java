package com.driusandilham.nemochat.controllers.entity;

import com.driusandilham.nemochat.db.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author drius on 18.03.2018.
 */
@Data
@AllArgsConstructor
public class DialogTabEntity {

    private Message lastMessage;
    private String header;
    private boolean isUserMessage;
}

package com.driusandilham.nemochat.service;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.Message;

/**
 * @author drius on 18.03.2018.
 */
public interface MessageService {

    Message getLastMessageByDialog(Dialog dialog);
}

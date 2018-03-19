package com.driusandilham.nemochat.service;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.Message;
import com.driusandilham.nemochat.db.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author drius on 18.03.2018.
 */
@Service
public class MessageServiceImpl implements MessageService {

    private MessageRepository messageRepository;

    @Override
    public Message getLastMessageByDialog(Dialog dialog) {
        return messageRepository.findTopByDialogOrderByCreationDateDesc(dialog);
    }

    @Autowired
    public void setMessageRepository(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }
}

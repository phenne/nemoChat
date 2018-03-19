package com.driusandilham.nemochat.controllers;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.Message;
import com.driusandilham.nemochat.service.DialogService;
import com.driusandilham.nemochat.service.MessageService;
import com.driusandilham.nemochat.controllers.entity.DialogTabEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author drius on 18.03.2018.
 */
@RestController
public class DialogController {

    private DialogService dialogService;
    private MessageService messageService;

    @GetMapping("/dialog/{username}")
    public List<Dialog> getDialogs(@PathVariable("username") String username) {
        return dialogService.getDialogsByUsername(username);
    }

    @GetMapping("/dialogTab/{username}")
    public List<DialogTabEntity> getDialogTabEntities(@PathVariable("username") String username) {
        List<DialogTabEntity> dialogTabEntities = new ArrayList<>();
        List<Dialog> dialogs = dialogService.getDialogsByUsername(username);

        dialogs.forEach(dialog -> {
            Message message = messageService.getLastMessageByDialog(dialog);
            String header;

            if (dialog.getParticipants().size() > 2) {
                header = dialog.getDialogName();
            } else {
                header = dialog.getParticipants()
                        .stream()
                        .filter(x -> !x.getUserName().equals(username))
                        .findAny()
                        .orElseThrow(RuntimeException::new)
                        .getUserName();
            }

            boolean isUserMessage = message.getAuthor().getUserName().equals(username);

            dialogTabEntities.add(new DialogTabEntity(message, header, isUserMessage));
        });

        return dialogTabEntities;
    }

    @Autowired
    public void setDialogService(DialogService dialogService) {
        this.dialogService = dialogService;
    }

    @Autowired
    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }
}

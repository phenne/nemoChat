package com.driusandilham.nemochat.controllers;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.service.DialogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author drius on 18.03.2018.
 */
@RestController("/dialog")
public class DialogController {

    private DialogService dialogService;

    @GetMapping("/getByUser")
    public List<Dialog> getDialogs(String username) {
        return dialogService.getDialogsByUsername(username);
    }

    @Autowired
    public void setDialogService(DialogService dialogService) {
        this.dialogService = dialogService;
    }
}

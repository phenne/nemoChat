package com.driusandilham.nemochat.service;

import com.driusandilham.nemochat.db.entity.Dialog;

import java.util.List;

/**
 * @author drius on 18.03.2018.
 */

public interface DialogService {

    List<Dialog> getDialogsByUsername(String userName);
}

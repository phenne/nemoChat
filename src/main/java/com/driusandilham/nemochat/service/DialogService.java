package com.driusandilham.nemochat.service;

import com.driusandilham.nemochat.db.entity.Dialog;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author drius on 18.03.2018.
 */
@Service
public interface DialogService {

    List<Dialog> getDialogsByUsername(String userName);
}

package com.driusandilham.nemochat.service;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.User;
import com.driusandilham.nemochat.db.repository.DialogRepository;
import com.driusandilham.nemochat.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author drius on 18.03.2018.
 */
@Service
public class DialogServiceImpl implements DialogService {

    private DialogRepository dialogRepository;
    private UserRepository userRepository;

    @Override
    public List<Dialog> getDialogsByUsername(String userName) {
        User user = userRepository.getUserByUserName(userName);
        return dialogRepository.findDialogByParticipantsContains(user);
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setDialogRepository(DialogRepository dialogRepository) {
        this.dialogRepository = dialogRepository;
    }
}

package com.driusandilham.nemochat.controllers;

import com.driusandilham.nemochat.db.entity.Dialog;
import com.driusandilham.nemochat.db.entity.Message;
import com.driusandilham.nemochat.db.entity.User;
import com.driusandilham.nemochat.db.repository.DialogRepository;
import com.driusandilham.nemochat.db.repository.MessageRepository;
import com.driusandilham.nemochat.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;


/**
 * Controller that returns the main page index.html located in resources.
 *
 * @author drius on 08.02.2018.
 */
@Controller
public class MainController {

    @Autowired
    private DialogRepository dialogRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MessageRepository messageRepository;

    @RequestMapping(value = "/")
    public String getIndex() {
//        User user = new User();
//        user.setUserName("andrey");
//
//        User user1 = new User();
//        user1.setUserName("ilham");
//
//        List<User> users = Arrays.asList(user, user1);
//
//        Dialog dialog = new Dialog();
//        dialog.setDialogCreator(user);
//        dialog.setParticipants(users);
//
//        Message message = new Message();
//        message.setMessageText("Hello there!");
//        message.setCreationDate(System.nanoTime());
//        message.setAuthor(user);
//        message.setDialog(dialog);
//
//        userRepository.save(users);
//        dialogRepository.save(dialog);
//        messageRepository.save(message);

        return "index";
    }
}

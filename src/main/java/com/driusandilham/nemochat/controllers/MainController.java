package com.driusandilham.nemochat.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * Controller that returns the main page index.html located in resources.
 *
 * @author drius on 08.02.2018.
 */
@Controller
public class MainController {

    @RequestMapping(value = "/")
    public String getIndex() {
        return "index";
    }
}

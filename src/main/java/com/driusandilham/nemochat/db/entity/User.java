package com.driusandilham.nemochat.db.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * @author drius on 16.03.2018.
 */
@Data
public class User {

    @Id
    private String id;
    private String userName;
}

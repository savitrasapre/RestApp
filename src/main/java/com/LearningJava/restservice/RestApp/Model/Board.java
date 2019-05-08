package com.LearningJava.restservice.RestApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "boards")
public class Board {
    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String[] getFor_teams() {
        return for_teams;
    }

    public void setFor_teams(String[] for_Teams) {
        this.for_teams = for_Teams;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getDue_in() {
        return due_in;
    }

    public void setDue_in(Integer due_in) {
        this.due_in = due_in;
    }

    public Boolean getClosed() {
        return isClosed;
    }

    public void setClosed(Boolean closed) {
        isClosed = closed;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }


    @Id
    public String _id;
    @Field
    public String[] for_teams;
    public String name;
    public String desc;
    public Integer due_in;
    public Boolean isClosed;
    public String user_id;


    public Board() {
    }

    public Board(String _id, String[] for_teams, String name, String desc, Integer due_in, Boolean isClosed, String user_id) {
        this._id = _id;
        this.for_teams = for_teams;
        this.name = name;
        this.desc = desc;
        this.due_in = due_in;
        this.isClosed = isClosed;
        this.user_id = user_id;

    }

}

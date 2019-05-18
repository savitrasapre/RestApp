package com.LearningJava.restservice.RestApp.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection="users")
public class User {
    @Id
    private String _id;
    private String fullname;
    @Field("email")
    private String email;
    private String[] boards;

    //Converted ObjectId to String, because default type is [machinecode,timestamp and such]
    public String[] getBoards() {
        return boards;
    }

    public void setBoards(String[] boards) {
        this.boards = boards;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String get_id()
    {
        return _id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User(){
    }

    public User(String id, String fullname, String email, String[] boards)
    {
        this._id = id;
        this.boards = boards;
        this.fullname = fullname;
        this.email = email;
    }

}

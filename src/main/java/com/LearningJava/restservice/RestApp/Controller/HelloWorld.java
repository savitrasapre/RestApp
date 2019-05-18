package com.LearningJava.restservice.RestApp.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloWorld {

    @RequestMapping(value = "/index",method = RequestMethod.GET)
    public String index()
    {
        return "Hello World!";
    }
}

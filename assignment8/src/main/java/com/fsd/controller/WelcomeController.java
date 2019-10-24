package com.fsd.controller;

import com.fsd.domain.ResultJson;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
    @GetMapping("/welcome")
    public ResultJson<String> welcome() {
        return ResultJson.ok("welcome");
    }
}

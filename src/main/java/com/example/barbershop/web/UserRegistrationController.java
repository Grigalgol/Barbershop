package com.example.barbershop.web;

import com.example.barbershop.service.UserService;
import com.example.barbershop.web.dto.UserRegistrarionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {

    @Autowired
    private UserService userService;

    private String registerUserAccount(@ModelAttribute("user") UserRegistrarionDto userRegistrarionDto) {
        userService.save(userRegistrarionDto);
        return "redirect:/registration?success";
    }
}

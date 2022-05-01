package com.example.barbershop.service;

import com.example.barbershop.model.User;
import com.example.barbershop.web.dto.UserRegistrarionDto;

public interface UserService {
    User save(UserRegistrarionDto userRegistrarionDto);
}

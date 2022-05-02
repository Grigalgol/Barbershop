package com.example.barbershop.service;

import com.example.barbershop.model.Role;
import com.example.barbershop.model.User;
import com.example.barbershop.repository.UserRepository;
import com.example.barbershop.web.dto.UserRegistrarionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(UserRegistrarionDto userRegistrarionDto) {
        User user = new User(userRegistrarionDto.getFirstName(), userRegistrarionDto.getLastName(),
                userRegistrarionDto.getEmail(), userRegistrarionDto.getNumber(), userRegistrarionDto.getPassword(),
                Arrays.asList(new Role("ROLE_USER")));
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}

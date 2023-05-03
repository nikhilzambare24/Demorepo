package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class OpenshiftdemoApplication {

	@GetMapping("/getmessage")
	public String getmessage() {
		return "You are in Get message method..";
	} 
	
	@PostMapping("/sendmessage/{mess}")
	public String sendmessage(@PathVariable String mess) {
		return ("You are in Send message method.. with message : "+mess);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(OpenshiftdemoApplication.class, args);
	}

}

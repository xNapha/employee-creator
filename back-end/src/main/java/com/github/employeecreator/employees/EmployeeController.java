package com.github.employeecreator.employees;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.employeecreator.exeptions.NotFoundException;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
	@Autowired
	private EmployeeService service;

	@PostMapping
	public ResponseEntity<Employee> createEmployee(@RequestBody CreateEmployeeDTO data) {
		Employee createdEmployee = this.service.create(data);
		return new ResponseEntity<Employee>(createdEmployee, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.service.findAll();
		return new ResponseEntity<List<Employee>>(allEmployees, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.findById(id);
		if (maybeEmployee.isPresent()) {
			return new ResponseEntity<Employee>(maybeEmployee.get(), HttpStatus.OK);
		} else {
			throw new NotFoundException("Could not delete post with id: " + id);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id) {
		boolean isDeleted = this.service.deleteById(id);
		if (isDeleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} else {
			throw new NotFoundException("Could not delete post with id: " + id);
		}
	}

	@PatchMapping("/{id}")
	public ResponseEntity<Employee> updateById(@PathVariable Long id, @RequestBody UpdateEmployeeDTO data) {
		Optional<Employee> maybeEmployee = this.service.updateById(id, data);
		if (maybeEmployee.isPresent()) {
			return new ResponseEntity<Employee>(maybeEmployee.get(), HttpStatus.OK);
		} else {
			throw new NotFoundException("Could not update post with id: " + id);
		}

	}
}

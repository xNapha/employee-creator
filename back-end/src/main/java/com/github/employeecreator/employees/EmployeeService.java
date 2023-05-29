package com.github.employeecreator.employees;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.employeecreator.address.Address;
import com.github.employeecreator.employmentStatus.EmploymentStatus;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	@Autowired
	private EmployeeRepository repository;

	@Autowired
	private ModelMapper modelMapper;

	public Employee create(CreateEmployeeDTO data) {
		Employee employeeRequest = modelMapper.map(data, Employee.class);
		Address addressRequest = modelMapper.map(data.address, Address.class);
		EmploymentStatus employmentStatusRequest = modelMapper.map(data.employmentStatus, EmploymentStatus.class);
		employeeRequest.setAddress(addressRequest);
		employeeRequest.setEmploymentStatus(employmentStatusRequest);
		return this.repository.save(employeeRequest);
	}

	public List<Employee> findAll() {
		return this.repository.findAll();
	}

	public Optional<Employee> findById(Long id) {
		return this.repository.findById(id);
	}

	public boolean deleteById(Long id) {
		Optional<Employee> maybeEmployee = this.findById(id);
		if (maybeEmployee.isPresent()) {
			this.repository.delete(maybeEmployee.get());
			return true;
		}
		return false;
	}

	public Optional<Employee> updateById(Long id, UpdateEmployeeDTO data) {
		Optional<Employee> maybeEmployee = this.findById(id);

		if (maybeEmployee.isPresent()) {
			Employee existingEmployee = maybeEmployee.get();
			Address existingAddress = maybeEmployee.get().getAddress();
			EmploymentStatus existingEmploymentStatus = maybeEmployee.get().getEmploymentStatus();
			modelMapper.map(data, existingEmployee);
			modelMapper.map(data.getAddress(), existingAddress);
			modelMapper.map(data.getEmploymentStatus(), existingEmploymentStatus);
			return Optional.of(this.repository.save(existingEmployee));
		}
		return maybeEmployee;
	}
}

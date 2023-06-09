package com.github.employeecreator.employees;

import com.github.employeecreator.address.Address;
import com.github.employeecreator.employmentStatus.EmploymentStatus;

import jakarta.validation.constraints.NotBlank;

public class CreateEmployeeDTO {
	@NotBlank
	String firstName;
	String middleName;
	@NotBlank
	String lastName;
	@NotBlank
	String email;
	@NotBlank
	String mobileNumber;
	@NotBlank
	Address address;
	@NotBlank
	EmploymentStatus employmentStatus;

	public CreateEmployeeDTO(@NotBlank String firstName, String middleName, @NotBlank String lastName,
			@NotBlank String email, @NotBlank String mobileNumber, Address address, EmploymentStatus employmentStatus) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.employmentStatus = employmentStatus;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public EmploymentStatus getEmploymentStatus() {
		return employmentStatus;
	}

	public void setEmploymentStatus(EmploymentStatus employmentStatus) {
		this.employmentStatus = employmentStatus;
	}

}

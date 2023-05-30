package com.github.employeecreator.employees;

import com.github.employeecreator.address.Address;
import com.github.employeecreator.employmentStatus.EmploymentStatus;

import jakarta.validation.constraints.Pattern;

public class UpdateEmployeeDTO {
	@Pattern(regexp = "^(?=\\s*\\S).*$", message = "First Name cannot be an empty string")
	String firstName;

	String middleName;
	@Pattern(regexp = "^(?=\\s*\\S).*$", message = "Last Name cannot be an empty string")
	String lastName;
	@Pattern(regexp = "^(?=\\s*\\S).*$", message = "Email cannot be an empty string")
	String email;
	@Pattern(regexp = "^(?=\\s*\\S).*$", message = "Mobile Number cannot be an empty string")
	String mobileNumber;

	Address address;

	EmploymentStatus employmentStatus;

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

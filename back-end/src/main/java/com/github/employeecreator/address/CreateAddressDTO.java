package com.github.employeecreator.address;

import com.github.employeecreator.employees.Employee;

import jakarta.validation.constraints.NotBlank;

public class CreateAddressDTO {

	@NotBlank
	String streetNumber;

	@NotBlank
	String streetName;

	@NotBlank
	String suburb;

	@NotBlank
	String state;

	@NotBlank
	String postCode;

	@NotBlank
	Employee employee;

	public CreateAddressDTO(@NotBlank String streetNumber, @NotBlank String streetName, @NotBlank String suburb,
			@NotBlank String state, @NotBlank String postCode, @NotBlank Employee employee) {
		super();
		this.streetNumber = streetNumber;
		this.streetName = streetName;
		this.suburb = suburb;
		this.state = state;
		this.postCode = postCode;
		this.employee = employee;
	}

	public String getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public String getSuburb() {
		return suburb;
	}

	public void setSuburb(String suburb) {
		this.suburb = suburb;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

}

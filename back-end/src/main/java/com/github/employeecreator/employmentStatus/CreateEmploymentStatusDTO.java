package com.github.employeecreator.employmentStatus;

import jakarta.validation.constraints.NotBlank;

public class CreateEmploymentStatusDTO {

	@NotBlank
	String startDate;

	String endDate;

	@NotBlank
	Boolean isOnGoing;

	@NotBlank
	String timeBasis;

	@NotBlank
	String contractType;

	@NotBlank
	Integer hoursPerWeek;

}

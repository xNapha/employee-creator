package com.github.employeecreator.employmentStatus;

import com.github.employeecreator.employees.Employee;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "employment_statuses")
public class EmploymentStatus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column
	String startDate;

	@Column
	String endDate;

	@Column
	Boolean isOnGoing;

	@Column
	String timeBasis;

	@Column
	String contractType;

	@Column
	Integer hoursPerWeek;

	@OneToOne(mappedBy = "employmentStatus")
	Employee employee;

	public EmploymentStatus() {
	}

	public EmploymentStatus(String startDate, String endDate, Boolean isOnGoing, String timeBasis, String contractType,
			Integer hoursPerWeek) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.isOnGoing = isOnGoing;
		this.timeBasis = timeBasis;
		this.contractType = contractType;
		this.hoursPerWeek = hoursPerWeek;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Boolean getIsOnGoing() {
		return isOnGoing;
	}

	public void setIsOnGoing(Boolean isOnGoing) {
		this.isOnGoing = isOnGoing;
	}

	public String getTimeBasis() {
		return timeBasis;
	}

	public void setTimeBasis(String timeBasis) {
		this.timeBasis = timeBasis;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public Integer getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(Integer hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}

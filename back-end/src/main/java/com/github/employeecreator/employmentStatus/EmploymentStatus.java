package com.github.employeecreator.employmentStatus;

import java.util.Date;

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
	Date startDate;

	@Column
	Date endDate;

	@Column
	Boolean isOnGoing;

	@Column
	String timeBasis;

	@Column
	String contractType;

	@Column
	String hoursPerWeek;

	@OneToOne(mappedBy = "employmentStatus")
	Employee employee;

	public EmploymentStatus() {
	}

	public EmploymentStatus(Date startDate, Date endDate, Boolean isOnGoing, String timeBasis, String contractType,
			String hoursPerWeek) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.isOnGoing = isOnGoing;
		this.timeBasis = timeBasis;
		this.contractType = contractType;
		this.hoursPerWeek = hoursPerWeek;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
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

	public String getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(String hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}

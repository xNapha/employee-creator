package com.github.employeecreator.employmentStatus;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmploymentStatusService {
	@Autowired
	private EmploymentStatusRepository employmentStatusRepository;

	@Autowired
	private ModelMapper modelMapper;

	public Optional<EmploymentStatus> findById(Long id) {
		return this.employmentStatusRepository.findById(id);
	}

	public Optional<EmploymentStatus> updateById(Long id, EmploymentStatus data) {
		Optional<EmploymentStatus> maybeEmploymentStatus = this.findById(id);

		if (maybeEmploymentStatus.isPresent()) {
			EmploymentStatus existingEmploymentStatus = maybeEmploymentStatus.get();
			data.setId(id);
			modelMapper.map(data, existingEmploymentStatus);
			return Optional.of(this.employmentStatusRepository.save(existingEmploymentStatus));
		}
		return maybeEmploymentStatus;
	}
}

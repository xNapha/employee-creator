package com.github.employeecreator.address;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AddressService {
	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private ModelMapper modelMapper;

	public Optional<Address> findById(Long id) {
		return this.addressRepository.findById(id);
	}

	public Optional<Address> updateById(Long id, Address data) {
		Optional<Address> maybeAddress = this.findById(id);

		if (maybeAddress.isPresent()) {
			Address existingAddress = maybeAddress.get();
			data.setId(id);
			modelMapper.map(data, existingAddress);
			return Optional.of(this.addressRepository.save(existingAddress));
		}
		return maybeAddress;
	}
}

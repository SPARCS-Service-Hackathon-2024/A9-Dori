package com.example.demo.deprecated;

import com.example.demo.domain.member.Researcher;
import com.example.demo.deprecated.ResearcherDetails;
import com.example.demo.repository.ResearcherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ResearcherDetailsService implements UserDetailsService {

    private final ResearcherRepository researcherRepository;

    @Override
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
//        Researcher researcher = researcherRepository.findByLoginId(loginId);

//        return new ResearcherDetails(researcher);
        return null;
    }
}

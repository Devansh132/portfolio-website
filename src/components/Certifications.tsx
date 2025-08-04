import React from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
const certifications = [
    {
      title: 'Google Data Analytics',
      issuer: 'Coursera',
      date: '2023',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Data Analytics', 'Google', 'Coursera'],
      featured: true,
      color: 'from-blue-500 to-green-500'
    },
    {
      title: 'Web Development Virtual Internship',
      issuer: 'Bharat Intern',
      date: '2023',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Web Development', 'Internship'],
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'HackerRank Skills Verification (HTML, CSS, JavaScript)',
      issuer: 'HackerRank',
      date: '2023',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['HTML', 'CSS', 'JavaScript'],
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Computing Architecture',
      issuer: 'Great Learning',
      date: '2022',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Cloud Computing'],
      featured: false,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Best Out of Waste Program - 1st Place',
      issuer: 'College',
      date: '2021',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Creativity'],
      featured: false,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Code Combat Challenge - 2nd Place',
      issuer: 'College',
      date: '2021',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Coding', 'Competition'],
      featured: false,
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Tech Meetups & Knowledge Sharing Volunteer',
      issuer: 'Organization',
      date: '2022',
      credentialId: '',
      verificationUrl: '#',
      logo: '',
      skills: ['Volunteering'],
      featured: false,
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const stats = [
    { label: 'Total Certifications', value: certifications.length },
    { label: 'Cloud Platforms', value: 2 },
    { label: 'Team Collaborations', value: '10+' },
    { label: 'Technologies Mastered', value: '15+' }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <div key={index} className="certification-card group cursor-pointer">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Award size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                        <p className="text-blue-400 font-medium">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          {cert.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-green-400">
                        <CheckCircle size={16} />
                        <span className="text-xs">Verified</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2">Credential ID: {cert.credentialId}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.filter(cert => !cert.featured).map((cert, index) => (
              <div key={index} className="certification-card group cursor-pointer">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Award size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white truncate">{cert.title}</h4>
                        <p className="text-blue-400 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
                      <Calendar size={12} />
                      {cert.date}
                      <span className="ml-auto flex items-center gap-1 text-green-400">
                        <CheckCircle size={12} />
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
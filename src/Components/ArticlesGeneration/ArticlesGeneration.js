import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const ArticlesGeneration = () => {
  const [githubResources, setGithubResources] = useState([]);
  const [courses, setCourses] = useState([]);
  const [hasMoreRepos, setHasMoreRepos] = useState(true);
  const [activeSection, setActiveSection] = useState('github');

  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchGithubResources = useCallback(async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=topic:cybersecurity+topic:learning&sort=stars&order=desc&page=${page}&per_page=10`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setGithubResources((prev) => [...prev, ...data.items]);
      } else {
        setHasMoreRepos(false);
      }
    } catch (error) {
      console.error('Error fetching GitHub resources:', error);
      setHasMoreRepos(false);
    }
  }, [GITHUB_TOKEN]);

  useEffect(() => {
    console.clear();
    fetchGithubResources();

    const initialCourses = [
      {
        title: 'TryHackMe',
        url: 'https://tryhackme.com/',
        description: 'An online platform for learning and practicing cybersecurity skills through hands-on exercises.',
      },
      {
        title: 'Hack The Box',
        url: 'https://hackthebox.com/',
        description: 'A platform to test and advance your skills in penetration testing and cybersecurity.',
      },
      {
        title: 'OverTheWire: Bandit',
        url: 'https://overthewire.org/wargames/bandit/',
        description: 'A wargame that teaches the basics of Linux and command-line through challenges.',
      },
      {
        title: 'CTFtime',
        url: 'https://ctftime.org/',
        description: 'A website that tracks Capture The Flag (CTF) competitions and provides resources for participants.',
      },
      {
        title: 'Linux Journey',
        url: 'https://linuxjourney.com/',
        description: 'A free, self-paced learning resource to understand Linux fundamentals.',
      },
      {
        title: 'The Cyber Mentor',
        url: 'https://thecybermentor.com/',
        description: 'Offers cybersecurity training courses, including penetration testing and ethical hacking.',
      },
      {
        title: 'Cybrary',
        url: 'https://www.cybrary.it/',
        description: 'Provides free and paid cybersecurity courses on various topics and skill levels.',
      },
      {
        title: 'Udemy: Cyber Security Courses',
        url: 'https://www.udemy.com/topic/cyber-security/',
        description: 'A wide range of cybersecurity courses, both free and paid, covering different aspects of the field.',
      },
      {
        title: 'Coursera: Cybersecurity Specialization',
        url: 'https://www.coursera.org/specializations/cyber-security',
        description: 'A series of courses that cover the fundamentals of cybersecurity, including real-world applications.',
      },
      {
        title: 'EDX: Cybersecurity Fundamentals',
        url: 'https://www.edx.org/course/cybersecurity-fundamentals',
        description: 'An introduction to cybersecurity, teaching essential concepts and practices.',
      },
      {
        title: 'Roadmap.sh Cybersecurity Resources',
        url: 'https://roadmap.sh/cyber-security',
        description: 'A collection of cybersecurity resources, tutorials, and links to start or advance your career.',
      },
      {
        title: 'Kali Linux Official Documentation',
        url: 'https://www.kali.org/docs/',
        description: 'Comprehensive documentation on Kali Linux, including setup, tools, and best practices.',
      },
      {
        title: 'OWASP Top 10',
        url: 'https://owasp.org/www-project-top-ten/',
        description: 'A guide to the most critical security risks to web applications.',
      },
      {
        title: 'Metasploit Unleashed',
        url: 'https://www.offensive-security.com/metasploit-unleashed/',
        description: 'A free resource for learning about the Metasploit Framework and penetration testing.',
      },
      {
        title: 'Cybersecurity Basics by IBM',
        url: 'https://www.ibm.com/training/cybersecuritybasics',
        description: 'An introduction to cybersecurity concepts provided by IBM.',
      },
      {
        title: 'Cisco Networking Academy',
        url: 'https://www.netacad.com/',
        description: 'Courses on networking, security, and IT fundamentals from Cisco.',
      },
      {
        title: 'PacketStorm Security',
        url: 'https://packetstormsecurity.com/',
        description: 'A repository of cybersecurity tools, advisories, and training.',
      },
      {
        title: 'Google IT Support Professional Certificate',
        url: 'https://www.coursera.org/professional-certificates/google-it-support',
        description: 'A beginner-friendly program that includes IT and cybersecurity fundamentals.',
      },
      {
        title: 'SANS Cyber Aces Online',
        url: 'https://www.sans.org/cyberaces/',
        description: 'Free cybersecurity training covering operating systems, networking, and security fundamentals.',
      },
      {
        title: 'Blue Team Labs Online',
        url: 'https://blueteamlabs.online/',
        description: 'A platform focused on defensive security and blue team operations.',
      },
      {
        title: 'Open Web Application Security Project (OWASP)',
        url: 'https://owasp.org/',
        description: 'Free resources and tools for web application security.',
      },
      {
        title: 'Practical Ethical Hacking Course',
        url: 'https://www.tcm-sec.com/practical-ethical-hacking/',
        description: 'A hands-on course teaching ethical hacking techniques.',
      },
      {
        title: 'Wireshark University',
        url: 'https://www.wireshark.org/training/',
        description: 'Training on using Wireshark for network analysis and troubleshooting.',
      },
      {
        title: 'ProTechTorials',
        url: 'https://www.protechtorials.com/',
        description: 'Step-by-step tutorials for cybersecurity concepts and tools.',
      },
      {
        title: 'Cyber Security Roadmap: Complete Guide',
        url: 'https://github.com/example/cybersecurity-roadmap',
        description: 'A GitHub repository offering a structured roadmap to learn cybersecurity.',
      },
      {
        title: 'Hacker101',
        url: 'https://www.hacker101.com/',
        description: 'Free classes for learning web security and ethical hacking.',
      },
      {
        title: 'Cybersecurity MOOC List',
        url: 'https://www.mooc-list.com/tags/cyber-security',
        description: 'A curated list of MOOCs on cybersecurity topics.',
      },
      {
        title: 'Burp Suite Academy',
        url: 'https://portswigger.net/web-security',
        description: 'Interactive tutorials and labs for web application security.',
      },
      {
        title: 'Cyber Security Bootcamps',
        url: 'https://course.report/bootcamps/cyber-security',
        description: 'A directory of cybersecurity bootcamps and programs.',
      },
      {
        title: 'InfoSec Skills',
        url: 'https://www.infosecinstitute.com/skills/',
        description: 'An online platform for developing cybersecurity skills.',
      },
      {
        title: 'Certified Ethical Hacker (CEH)',
        url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
        description: 'An industry-standard certification and training program for ethical hacking.',
      },
      {
        title: 'NIST Cybersecurity Framework',
        url: 'https://www.nist.gov/cyberframework',
        description: 'Guidance on cybersecurity standards and best practices.',
      },
      {
        title: 'CyberPatriot',
        url: 'https://www.uscyberpatriot.org/',
        description: 'A youth cyber education program with online learning modules and competitions.',
      },
      {
        title: 'Security+ Certification Training',
        url: 'https://www.comptia.org/certifications/security',
        description: 'Training for CompTIA Security+ certification.',
      },
      {
        title: 'EC-Council CodeRed',
        url: 'https://codered.eccouncil.org/',
        description: 'Cybersecurity training and learning paths for professionals.',
      },
      {
        title: 'Zero to Mastery - Cyber Security Bootcamp',
        url: 'https://zerotomastery.io/courses/learn-cybersecurity-bootcamp/',
        description: 'Learn cybersecurity from scratch with hands-on exercises and real-world projects.',
      },
      {
        title: 'W3Schools - Cyber Security Tutorial',
        url: 'https://www.w3schools.com/cybersecurity/index.php',
        description: 'An introductory tutorial covering the fundamentals of cybersecurity and secure practices.',
      },
    ];


    setCourses(initialCourses);
  }, [fetchGithubResources]);

  // Clear console on any error
  useEffect(() => {
    const handleErrors = () => console.clear();
    window.addEventListener('error', handleErrors);
    window.addEventListener('unhandledrejection', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
      window.removeEventListener('unhandledrejection', handleErrors);
    };
  }, []);

  try {
    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <nav className="sticky top-0 bg-gray-800 text-white py-4 shadow-md z-10">
            <ul className="flex justify-center space-x-8">
              <li>
                <button
                  onClick={() => setActiveSection('github')}
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'github' ? 'text-blue-400' : ''}`}
                >
                  GitHub Repositories
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('courses')}
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'courses' ? 'text-blue-400' : ''}`}
                >
                  Courses
                </button>
              </li>
            </ul>
          </nav>

          {activeSection === 'github' && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">GitHub Repositories</h2>
              <InfiniteScroll
                dataLength={githubResources.length}
                next={() => fetchGithubResources(Math.ceil(githubResources.length / 10) + 1)}
                hasMore={hasMoreRepos}
                loader={<p className="text-white">Loading more repositories...</p>}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {githubResources.map((repo) => (
                    <div
                      key={repo.id}
                      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <img
                            src={repo.owner.avatar_url}
                            alt="Owner"
                            className="w-10 h-10 rounded-full mr-2"
                          />
                          <span className="text-blue-400 text-sm">{repo.owner.login}</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
                          {repo.name}
                        </h2>
                        <p className="text-gray-300 text-sm mb-4">
                          {repo.description?.slice(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-4">
                            <span className="text-gray-400">⭐ {repo.stargazers_count}</span>
                            <span className="text-gray-400">🔀 {repo.forks_count}</span>
                          </div>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            View Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            </section>
          )}

          {activeSection === 'courses' && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-white mb-2 hover:text-blue-400">
                        {course.title}
                      </h2>
                      <p className="text-gray-300 text-sm mb-4">
                        {course.description}
                      </p>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering component:", error);
    console.clear();
    return null; 
  }
};

export default ArticlesGeneration;
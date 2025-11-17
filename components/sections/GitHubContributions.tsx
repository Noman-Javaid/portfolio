"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { personalInfo } from "@/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";

interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  totalStars: number;
  yearCreated: number;
}

const GitHubContributions = () => {
  const githubUsername = personalInfo.github.split('/').pop() || 'Noman-Javaid';
  
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        const userData = await userResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`);
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const yearCreated = new Date(userData.created_at).getFullYear();
        
        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          yearCreated,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [githubUsername]);

  const currentYear = new Date().getFullYear();
  const yearsActive = stats ? currentYear - stats.yearCreated : 3;

  return (
    <section id="github" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Activity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Contributions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">Activity</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A visual representation of my coding journey and daily commitment to development
          </p>
        </AnimatedSection>

        {/* GitHub Calendar Container */}
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="scale" className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200 hover:shadow-2xl transition-all duration-500">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-2">
                  {loading ? '...' : `${yearsActive}+`}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-2">
                  {loading ? '...' : stats?.repos || 14}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Public Repos</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-2">
                  {loading ? '...' : stats?.followers || 0}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Followers</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-2">
                  {loading ? '...' : stats?.totalStars || 0}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Total Stars</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6 sm:mb-8"></div>

            {/* GitHub Calendar - Scrollable on Mobile */}
            <div className="overflow-x-auto pb-4 -mx-2 px-2">
              <div className="min-w-max mx-auto flex justify-center">
                <GitHubCalendar
                  username={githubUsername}
                  blockSize={12}
                  blockMargin={3}
                  fontSize={12}
                  colorScheme="light"
                  theme={{
                    light: ['#f1f5f9', '#cbd5e1', '#64748b', '#475569', '#1e293b'],
                  }}
                  style={{
                    color: '#64748b',
                  }}
                />
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm text-slate-600">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-100 rounded"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-300 rounded"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-700 rounded"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-900 rounded"></div>
              </div>
              <span>More</span>
            </div>

            {/* GitHub Link */}
            <div className="text-center mt-6 sm:mt-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">View Full GitHub Profile</span>
                <span className="sm:hidden">View Profile</span>
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Info Cards */}
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-blue-500 to-cyan-500",
                title: "Consistent Contributor",
                description: "Regular commits demonstrating dedication and continuous improvement"
              },
              {
                icon: (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                gradient: "from-purple-500 to-pink-500",
                title: "Open Source",
                description: "Contributing to the developer community and collaborative projects"
              },
              {
                icon: (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: "from-green-500 to-emerald-500",
                title: "Always Learning",
                description: "Exploring new technologies and staying current with industry trends"
              }
            ].map((card, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-slate-200 text-center hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-4 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {card.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;

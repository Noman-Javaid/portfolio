"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { personalInfo } from "@/data/portfolio";

interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  totalStars: number;
  yearCreated: number;
}

const GitHubContributions = () => {
  // Extract username from GitHub URL
  const githubUsername = personalInfo.github.split('/').pop() || 'Noman-Javaid';
  
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        const userData = await userResponse.json();
        
        // Fetch repositories to get total stars
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
    <section id="github" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">GitHub Activity</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Contributions & Activity
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A visual representation of my coding journey and daily commitment to development
          </p>
        </div>

        {/* GitHub Calendar Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 hover:shadow-xl transition-all duration-500 animate-fade-in-up">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-vibrant mb-2">
                  {loading ? '...' : `${yearsActive}+`}
                </div>
                <div className="text-sm text-slate-600 font-medium">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-vibrant mb-2">
                  {loading ? '...' : stats?.repos || 14}
                </div>
                <div className="text-sm text-slate-600 font-medium">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-vibrant mb-2">
                  {loading ? '...' : stats?.followers || 0}
                </div>
                <div className="text-sm text-slate-600 font-medium">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-vibrant mb-2">
                  {loading ? '...' : stats?.totalStars || 0}
                </div>
                <div className="text-sm text-slate-600 font-medium">Total Stars</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

            {/* GitHub Calendar */}
            <div className="flex justify-center overflow-x-auto pb-4">
              <GitHubCalendar
                username={githubUsername}
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                colorScheme="light"
                theme={{
                  light: ['#f1f5f9', '#cbd5e1', '#64748b', '#475569', '#1e293b'],
                }}
                style={{
                  color: '#64748b',
                }}
              />
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-2 mt-8 text-sm text-slate-600">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-slate-100 rounded"></div>
                <div className="w-4 h-4 bg-slate-300 rounded"></div>
                <div className="w-4 h-4 bg-slate-500 rounded"></div>
                <div className="w-4 h-4 bg-slate-700 rounded"></div>
                <div className="w-4 h-4 bg-slate-900 rounded"></div>
              </div>
              <span>More</span>
            </div>

            {/* GitHub Link */}
            <div className="text-center mt-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Full GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Consistent Contributor</h4>
              <p className="text-slate-600 text-sm">Regular commits demonstrating dedication and continuous improvement</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Open Source</h4>
              <p className="text-slate-600 text-sm">Contributing to the developer community and collaborative projects</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Always Learning</h4>
              <p className="text-slate-600 text-sm">Exploring new technologies and staying current with industry trends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;


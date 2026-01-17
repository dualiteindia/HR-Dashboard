
import React from 'react';
import { Search, Share2, ClipboardList, Users, Plus, Link2, ArrowUpRight as ArrowIcon } from 'lucide-react';
import { ApplicantCard, DetailField } from './ApplicationOfferCards';

export const ApplicationOffer: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto p-10 flex gap-8">
      {/* Left Sidebar: Applicant Profile */}
      <div className="w-[400px] flex-shrink-0">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Applicant Profile</h2>
            <p className="text-sm text-gray-400">Job applicant profiles on your vacancies</p>
          </div>
          <button className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-400 hover:text-gray-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <ApplicantCard name="Jonathan Baker" role="UIUX Designer" exp="4th Years" active />
          <ApplicantCard name="Floyd Miles" role="UIUX Designer" exp="6th Years" />
          <ApplicantCard name="Jenny Wilson" role="UIUX Designer" exp="4th Years" />
        </div>
      </div>

      {/* Main Content: Details */}
      <div className="flex-1 space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Applicant Information Details</h2>
            <p className="text-sm text-gray-400">Detailed information of job seekers</p>
          </div>
          <button className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-400">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white p-8 rounded-[40px] shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-6">
              <img src="https://i.pravatar.cc/150?u=JonathanBaker" alt="" className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Jonathan Baker</h3>
                <p className="text-sm text-gray-400 font-medium">Candidate #APL002</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 bg-gray-100 text-gray-500 rounded-2xl text-sm font-bold hover:bg-gray-200 transition-colors">Move To Scouting</button>
              <button className="px-6 py-3 bg-red-500 text-white rounded-2xl text-sm font-bold hover:bg-red-600 transition-colors">Delete Candidate</button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-bold hover:bg-blue-700 transition-colors">Accept Applicant</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <DetailField label="Job Applied" value="Full Time UI Designer" />
            <DetailField label="Years of Experience" value="5 Years of Experience" />
            <DetailField label="Years of Experience" value="Visual Design, Motion Design" />
            <DetailField label="Applicant E-mail" value="jonbaker@gmail.com" />
            <DetailField label="Phone Number" value="(406) 555-0120" />
            <DetailField label="Address" value="74C Aaliyah River, Bayerhaven" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Recruitment Progress */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Recruitment Progress</h3>
                <p className="text-xs text-gray-400">Recruitment process that has been done</p>
              </div>
              <button className="p-3 bg-gray-50 rounded-2xl">
                <ArrowIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-[32px] space-y-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Completion of take home test</h4>
                <p className="text-xs text-gray-400">12 June 2024</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-[32px] space-y-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Interview meeting with HR Manager</h4>
                <p className="text-xs text-gray-400">12 June 2024</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-[32px] space-y-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Plus className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Completion of health forms</h4>
                <p className="text-xs text-gray-400">12 June 2024</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-[32px] space-y-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Link2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Administrative file collection</h4>
                <p className="text-xs text-gray-400">12 June 2024</p>
              </div>
            </div>
          </div>

          {/* Past Experience Detail */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold">Past Experience</h3>
                <p className="text-xs text-gray-400">Work experience of job seekers</p>
              </div>
              <button className="p-3 bg-gray-50 rounded-2xl">
                <ArrowIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="relative pl-6 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100 before:border-l before:border-dashed before:border-gray-300">
              {/* Item 1 */}
              <div>
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Drupal, Inc.</h4>
                    <p className="text-xs text-gray-400">Full Time UI Designer • Jan 2022 - Feb 2024</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-[32px] space-y-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Short Resume</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      In Drupal I worked on interfaces and did a lot of interviews with stakeholders and users which allowed us to get feedback and also insight into the project we were working on.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Interviewer Scoring</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 bg-white rounded-xl text-center">
                        <p className="text-[10px] text-gray-400 font-bold mb-1">Hard Skills</p>
                        <p className="text-sm font-bold text-gray-900">1290</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl text-center">
                        <p className="text-[10px] text-gray-400 font-bold mb-1">Soft Skills</p>
                        <p className="text-sm font-bold text-gray-900">1290</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl text-center">
                        <p className="text-[10px] text-gray-400 font-bold mb-1">Ovr. Score</p>
                        <p className="text-sm font-bold text-gray-900">1290</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="pt-4">
                <div className="absolute left-[-5px] top-[460px] w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Slack, Inc.</h4>
                    <p className="text-xs text-gray-400">Full Time UI Designer • Jan 2020 - Feb 2022</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-[32px] space-y-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Short Resume</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      In this company I learned a lot about UI design and the process of designing well and correctly. I also learned to collaborate with other divisions well and correctly to achieve common goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Docs Footer */}
        <div className="bg-white p-8 rounded-[40px] shadow-sm flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Administration Docs</h3>
            <p className="text-sm text-gray-400">Assets you have in your account</p>
          </div>
          <button className="p-4 bg-gray-50 rounded-2xl">
            <ArrowIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

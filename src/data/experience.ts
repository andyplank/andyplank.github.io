import type { WorkItem } from '../types';

export const experience: WorkItem[] = [
  {
    id: 8,
    company: 'Microsoft',
    position: 'Software Engineer II',
    dates: 'September 2023 to Present',
    description: [
      'Conducted system-level performance analysis of C code in Azure using ETW, flame graphs, and data analysis.',
      'Optimized C code for 80 concurrent VM deployments, reducing end-to-end latency by 38% (110 seconds).',
      'Made a demo for Microsoft Ignite showcasing the performance capabilities of Azure Boost NVMe SSDs',
      'Root caused thread auto-boost lock contention via ETW, reducing CPU usage by 62% on Windows Server for ARM.',
    ],
  },
  {
    id: 6,
    company: 'Microsoft',
    position: 'Software Engineer I',
    dates: 'August 2022 to September 2023',
    description: [
      'Deployed Linux VMs and testing infrastructure on Azure to evaluate various performance benchmarks.',
      'Implemented c code adding caching to a Windows OS feature check, improving SSD throughput by 68% (1.1M IOPS)',
      'Demonstrated an alternative memory allocator would reduce CPU usage by 57% for local storage workloads.',
      'Placed 3rd of 34 teams in a company sponsored Hack the Box CTF event.',
    ],
  },
  {
    id: 5,
    company: 'Purdue University',
    position: 'Head Graduate Teaching Assistant',
    dates: 'January 2021 to May 2022',
    description: [
      'Recipient of the 2022 “Graduate Teaching Assistant of the Year” award from the ACM student chapter.',
      "Lectured 200 students on computer architecture during the professor's absence.",
      'Taught two lab sections of 24 students every week on course concepts such as ARM assembly and building circuits.',
      'Coordinated all computer architecture GTAs on course issues like covid related absences and grading.',
    ],
  },
  {
    id: 4,
    company: 'Microsoft',
    position: 'Software Engineering Intern',
    dates: 'May 2021 to August 2022',
    description: [
      'Wrote Kusto queries to summarize Azure Host performance data during VM migration',
      'Created a PowerBI report to track daily VM migration trends',
    ],
  },

  {
    id: 3,
    company: 'Epic',
    position: 'Software Engineering Intern',
    dates: 'May to August 2020',
    description: [
      'Proposed a new method of growth chart graphing to allow physicians to easily identify abnormalities in babies.',
      'Designed and conducted a feature usability study including both national and international customers.',
      'Refactored a graphing module using C# and React to reduce cyclomatic complexity by 88%.',
    ],
  },
  {
    id: 2,
    company: 'Purdue University',
    position: 'Resident Assistant',
    dates: 'August 2019 to December 2020',
    description: [
      'Promoted an inclusive community on the floor by planning and hosting weekly events for 50 residents.',
      'Mediated conflicts between roommates to provide resolution in a timely manner.',
      'Interviewed potential Resident Assistant candidates for the following school year.',
    ],
  },
  {
    id: 1,
    company: 'Quicken Loans',
    position: 'Software Engineering Intern',
    dates: 'May to July 2019',
    description: [
      'Designed a web application with Angular to manage and track the intake of new tech ideas at Quicken Loans.',
      'Enabled application hosting by configuring infrastructure on AWS, including S3s, Lambdas, and API Gateways.',
      'Contributed to a feature that reduced the processing time of escrow deletion from 60 days to 8 days.',
      'Gained experience in SAFe practices through daily standups, release planning, retrospectives, and design sessions.',
    ],
  },
];

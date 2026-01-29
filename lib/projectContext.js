export const projectContext = `
# **Product Idea Document:**

# **School/College LMS for CBSE & State Syllabus**

## 1\. Introduction

* A multi-tenant web \+ mobile LMS & management system tailored for CBSE & State syllabus schools in Kerala.  
* Distinct from generic LMS → focuses on syllabus-aligned materials, assessments, attendance, bus tracking, progress reports, and community engagement.  
* Will be accessible via:  
  * Web: For SuperAdmin (us) and School Admins.  
  * Mobile App 1 → Teachers \+ Drivers  
    * Role-based login → if Teacher logs in, they see Teacher Dashboard; if Driver logs in, they see Driver Dashboard.  
  * Mobile App 2  → Parents \+ Students  
    * Role-based login → if Parent logs in, Parent Dashboard; if Student logs in, Student Dashboard.  
    * Parents login via phone number → OTP → mapped child profiles.  
    * Students login via school-issued credentials (probably with email).

  ## 2\.  Objectives

* Simplify academic & admin management for schools.  
* Provide real-time insights for parents on attendance, transport, and student progress.  
* Empower students with learning materials, assessments, and engagement features.  
* Enable safe & transparent school transport.  
* Foster student collaboration, creativity, and engagement through community features.

  ## 3\. User Roles & Functional Requirements

1. ### SuperAdmin (Us)

   1. Full control across all schools.  
   2. View, filter, and manage data school-wise, class-wise, teacher-wise, student-wise.  
   3. Community: remove posts access if something is wrong with content.  
   4. Post global announcements/notices for all schools or selected schools.  
   5. Create quizzes & mock tests for cross-school usage.  
   6. Organize inter-school competitions.  
   7. Send customized push notifications by role (student/parent/teacher) or by school.  
   8. Monitor bus tracking for all schools.  
   9. Analytics dashboards: active schools, active users, engagement reports.  
      

2. ### Admin (School Management)

#calendar \- for teacher, timetable for student, calendar for parent to mark holidays or half-day class/annual day

#fee management  
#attendance in case of teacher’s absense  
#approval of posts posted by teachers and students

1. Add/manage students, teachers, and drivers.  
   

#define manage

1. Bulk add via CSV import.  
   2. Normal Form addition  
   2. Map students → subjects → teachers.  
   3. Bulk upload marks via CSV.  
   4. Track student progress: class-wise, subject-wise, teacher-wise.  
   5. Post announcements/circulars in activity centre.  
      1. Set visibility: subject, class, teachers only, students only, or everyone.  
         

#post delete,create

6. Organize school-level quizzes, mock tests, competitions.  
   7. Send customized notifications by role, and track notification delivery & views.  
   8. View and manage bus tracking & current status.  
   9. Bus Login ID creation  
   10. Engagement Analytics  
         
       

3. ### Teacher

   

#class teachers and non class teacher  
#analytics section

1. Manage assigned classes, subjects, students.  
   2. Community posts (notices/updates) with visibility filters.  
   3. Approve/reject student posts (moderator role).  
   4. Generate subject-wise reports & class performance reports.  
   5. Send push notifications to students/parents (e.g., PTA meeting).  
   6. Create and manage assignments, quizzes, assessments.  
   7. Homework posting.  
      

#homework \=assignment

8. Provide feedback or grades for assignments.  
   9. Attendance:  
      1. Draft attendance (editable for 30 mins).  
      2. Auto submit after 30 mins.  
      3. Parent notified instantly via SMS \+ Push if absent.  
   10. Real-time Q\&A support in discussion boards. (Eg: Stackoverflow)

#Q\&A \- need to clarify, best to implement in phase 2

11. Class dashboard: attendance %, averages, top/bottom students.  
    

4. ### Driver

   The driver module will support two possible approaches for bus tracking:  
   1. Option 1 – Mobile-Based Tracking  
      1. Driver/Helper logs in using Bus ID credentials (bus-number-based login).  
      2. Location is fetched via the driver’s mobile GPS.  
      3. Driver can start/stop trips (check-in/check-out).  
      4. Parents can view the real-time bus location through the app.  
  
   Note: The Driver and Teacher roles share the same mobile app. The displayed dashboard and available features will depend on the user’s role after login.

   

5. ### Parents

#can read calendar and check whether there is holiday tomorrow or any upcoming days and any special occasions as notified by admin 

1. Login with phone number → OTP.  
   2. Multiple children dashboard if mapped.  
   3. View child’s performance, class average, reports.  
   4. View important announcements (exams, PTAs, events).  
   5. Track bus location live.  
   6. Absence notification (SMS \+ Push).  
   7. Download circulars, reports.

   8. Fee reminders & payment gateway.  
        
        

6. ### Students

     
   1. View community posts (school & inter-school).  
   2. Attach questions and files in discussions.  
   3. Aura Gamification:  
      1. Earn Aura score for contributions.  
      2. Verified answers \= Aura boost.  
      3. Badges for top performers/quizzes.  
   4. Dashboard with Aura, progress, achievements.  
   5. Access study materials, reports, averages.  
   6. Peer review system → students give feedback on each other’s work.  
`;

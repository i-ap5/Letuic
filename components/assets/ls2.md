# PseudoCode for the Project

## Pseudo Code \- Module 1:

START

1. Project Creation (By Manager or Admin)  
   * Manager or Admin creates a new Project Draft with:

     \- Draft Project Number

     \- Job Type (Residential, Commercial, Jobwork)

   * The Project's overall status is set to Pre-Production.  
   * The created\_by\_manager\_id is logged.

         

2. Project Assignment (By Manager or Admin)  
   * Manager assigns the entire Project Container to an available Project Coordinator.  
   * The assigned\_coordinator\_id is logged for the project.  
       
3. Task Initiation (By Project Coordinator)  
   * The Project Coordinator opens the Project Container.

4. Manager sends project draft details to Quotation Team  
5. Head of Quotation assigns quotation task to available Quotation Team Member  
6. Quotation Team prepares quotation  
7. LOOP (Quotation Team Review):

   Quotation Team Member submits quotation to Head of Quotation

   Head of Quotation reviews quotation

   IF approved THEN

   Head of Quotation sends quotation to Manager

   EXIT LOOP

   ELSE

   Return to Quotation Team Member for revision

   REPEAT LOOP until approved

8. Manager informs Customer about quotation  
9. LOOP (Quotation Approval):

   Check if Customer has approved quotation

   IF approved THEN

   Project Draft becomes Confirmed Project  
   Manager Assign Project Coordinator

   EXIT LOOP

   ELSE

   Collect customer feedback / expectations

   Manager sends feedback to Head of Quotation

   Head of Quotation assigns revision to Quotation Team Member

   Quotation Team Member revises quotation

   Head of Quotation re-approves and sends back to Manager

   Manager informs Customer about revised quotation

   REPEAT LOOP

10. Project Coordinator sends confirmed project to Head of Drawing in Drawing Team  
11. Head of Drawing assigns tasks to Drawer(s) based on availability  
    \- Tasks may be split (e.g., Bedroom → Drawer A, Kitchen → Drawer B)  
    \- Each task is tracked separately  
12. Drawer prepares drawing for assigned task and sends it to Head of Drawing  
13. LOOP (Task Drawing Approval):  
    Head of Drawing reviews drawing of each task  
    IF approved THEN

    Send drawing to Project Coordinator  
    INSERT a new row into task\_events with:  
              task\_id: \[current task's id\]  
              status: 'approved'  
              user\_id: \[Head of Drawing's id\]  
              notes: "Approved"  
    ELSE  
    Send task back to Drawer for restructuring  
      
    UPDATE the project\_tasks table SET status \= 'rework' for the current task  
    INSERT a new row into task\_events with:

              task\_id: \[current task's id\]  
              status: 'rework'  
              user\_id: \[Head of Drawing's id\]  
              notes: \[The feedback/reason for rejection\]

    REPEAT LOOP until approved  
      
14. Project Coordinator reviews each approved task drawing

    IF Coordinator approves THEN

    Send task to Head of Designer in Production Designing Team

    ELSE

    Send back to Head of Drawing

    (Drawing approval loop continues for that task until approved)

15. Head of Designing assigns approved tasks to Designer(s) based on availability  
16. LOOP (Designer Approval per Task):

    Designer designs the task and sends result to Head of Designer

    Head of Designer reviews the Designer’s revert

    IF approved THEN

    Send task design to Project Coordinator

    Mark task as "Design Completed"

    ELSE

    Send back to Designer for correction

    REPEAT LOOP until approved

17. FINAL REVIEW (Task-wise by Project Coordinator):

    For each task individually:

    Review the task (Quotation → Drawing → Designing)

    IF task is correct THEN

    Mark task as "Module One Completed"

    Assign that task immediately to Production 

    Physical Drawing Submission (Checks)

    Coordinator for Module Two

    ELSE

    Identify issue in that task

    Send back to corresponding team (Quotation / Drawing / Designing)

    Follow the respective loop until task is approved

    

18. Repeat Step 15 for all tasks until all tasks are released into Module Two

    

    

Important Notes:

* Projects can be assigned to any team in parallel by the Project Coordinator (e.g., Quotation, Drawing, Designing).  
* A Manager can view and track all projects they created (e.g., Manager A creates projects 1, 2, 3, 4, 6, 9, so they can view and manage all of them).  
* A Project Coordinator can only view and manage projects specifically assigned to them (e.g., if assigned projects 1, 3, 9, they can only view and manage those).

## Pseudo Code \- Module 2: 

START

1. Production Coordinator receives each confirmed project task (from Module 1 Drawing split)  
2. Production Coordinator prepares Material Listing for the task  
3. Production Coordinator sends Material Listing to Product Store for quotation  
4. Product Store checks Factory Stock for available items  
         \- Use available items  
         \- Prepare quotation for remaining items  
   	 \- Send for purchase wing  
         \- Send quotation back to Production Coordinator  
5. LOOP (Quotation Approval by Production Coordinator):

   Production Coordinator reviews the quotation

   IF quotation correct THEN

   IF only partial materials are available THEN

   Split task into Sub-Tasks (e.g., Chair / Table / Wall)

   Approve sub-tasks with full material availability

   Hold remaining sub-tasks until material arrives

   ELSE

   Approve full task quotation

   EXIT LOOP

   ELSE

   Send back to Product Store for revision

   REPEAT Step 5 until approved

   

   

6. For each Approved Sub-Task:

   Production Coordinator assigns Supervisor

7. Supervisor verifies sub-task and assigns Worker  
8. Worker workflow:

   \- Marks Start (timer, cost, workers logged)

   \- Performs task

   \- Marks Completion

   IF error occurs → report Error to Supervisor

9.  Supervisor review:

   IF sub-task output is correct THEN

   Approve and assign next phase

   ELSE IF rework needed THEN

   Return to Worker for correction

   REPEAT Step 8–9

   ELSE IF error caused material loss THEN

   Escalate to Production Coordinator

   Production Coordinator sends requirement to Quotation Team for new material

   Restart process from Step 3

   

10. LOOP (Production Phases 1–4: Pressing → Cutting → Edge Bending → Boring):  
    Repeat Steps 7–9 for each phase  
11. Painting Phase:

    \- Production Coordinator may assign sub-task to Painting Coordinator

    \- Painting Coordinator → Head of Painting → Worker

    \- Worker marks Start & Complete

    \- Head of Painting reviews

    IF approved THEN 

    Send this to Painting Coordinator → Production Coordinator → Supervisor

    ELSE

    IF rework needed THEN 

    repeat painting phase

    IF material lost THEN 

    Escalate to Production Coordinator

    Production Coordinator sends requirement to Quotation Team for new material

    Restart process from Step 3

    

12. Phase 5: Assembling

    Supervisor assigns Assembling Worker

    Worker marks Start & Complete

    Supervisor reviews

          IF approved THEN:  
forward to QC  
          ELSE IF rework needed:  
			Repeat Assembling phase and assign worker  
ELSE IF material lost:  
Escalate to Production Coordinator  
Production Coordinator sends requirement to Quotation Team for new material  
Restart process from Step 3

13. Phase 6: Quality Control (QC)

    QC Team receives sub-task

    QC Team marks Start & Complete

    IF error found THEN

    Redirect to Supervisor → Rework

    IF material needed → Production Coordinator → Quotation Team → Step 3

    ELSE

    Perform Hardware & Accessories Checklist

    Cross-check with Naadi software

    IF missing items THEN

    Send to Supervisor \-\> Project Coordinator → Store → Quotation → Step 3

    REPEAT Step 13

    ELSE

    Approve and forward to Packaging

14. Phase 7: Packaging

    Securely pack each sub-task

    Supervisor verifies packaging

    Send to Project Coordinator for approval

    Accounts Team generates Final Invoice

    Final Invoice approved by Project Coordinator then send to spervisor 

    Checklist confirmed before Dispatch

    IF approved THEN 

    proceed to Dispatch

    ELSE 

    return to Step 14

15. Phase 8: Dispatch  
    1. Approved packed sub-tasks loaded on Truck  
    2. IF partial sub-tasks complete THEN:

       Partial Dispatch allowed with approval (Supervisor \+ Production Coordinator \+ Project Coordinator)

       EXIT LOOP

       ELSE

       wait until all sub-tasks ready

       EXIT LOOP

    3. Truck leaves factory  
16. Phase 9: Delivery Verification

    Truck reaches customer location

    Site Supervisor verifies items with factory checklist

    Sends report to Production Coordinator

    IF correct & no damage THEN 

    approve → Phase 10

    ELSE

    Mark Return by site supervisor and send to production supervisor

    Production Supervisor reviews and send this to Product Coordinator

    Product Coordinator send to Accounts team for Return Invoice

    Accounts issues Return Invoice

    Truck returns to factory

    Supervisor reassigns task

    IF material needed

    	Supervisor send to Production  coordinator

    Production Coordinator → Quotation Team → REPEAT from Step 3

17. Phase 10: Fixing at Customer Location

    Site Supervisor marks Start

    Record workers, cost, timer

    Daily progress reported in %

    Once 100% → Mark Fixing Complete

    Send report to Production Coordinator

    IF approved THEN:

    proceed to Final Review

    ELSE

    return to Step 17 and repeat Fixing

    ELSE IF material lost:

    Site supervisor escalate to Production Coordinator

    Production Coordinator sends requirement to Quotation Team for new material

    Restart process from Step 3

18. Final Review (by Production Coordinator)

    Verify:

    Stock approval

    Phases 1–4 completion

    Painting

    Assembling (Phase 5\)

    QC & Naadi Hardware check (Phase 6\)

    Packaging

    Dispatch & Delivery

    Fixing at site

    All initial Drawing Splits and sub-tasks 100% completed

    All hours, workers, and costs logged

    IF everything correct THEN

    Module Two Completed

    Send completion report to Project Coordinator

    Then Manager, to Admin for Final confirmation.

    ELSE

    Identify issue

    Remarks

    Return to responsible team (Store / Production / QC / Dispatch / Site)

    Follow loops until approved

19. Project Coordinator Approval

    Project Coordinator reviews Module Two completion

    IF approved THEN

    Project Completed

    ELSE 

    return to Production Coordinator

    Repeat corrections until approved

END  

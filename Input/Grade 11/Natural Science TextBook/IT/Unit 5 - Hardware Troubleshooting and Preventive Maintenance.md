# Unit 5: Hardware Troubleshooting and Preventive Maintenance

## Learning Outcomes

At the end of this unit, students will be able to:
- Explain maintenance procedures and troubleshooting
- State hardware problems
- Describe hardware preventive maintenance
- Perform basic hardware troubleshooting & preventive maintenance
- Recognize the value of hardware troubleshooting to keep computer safety

## Unit Overview

Computers must be protected from any kind of threat that causes the computer to malfunction. Computer users should have some basic knowledge of troubleshooting and solving hardware-related problems. This unit covers hardware troubleshooting and preventive maintenance.

## 5.1 Hardware Troubleshooting

### Brainstorming 5.1

What do you know about computer hardware troubleshooting and maintenance?

Hardware troubleshooting is a systematic approach to locating the cause of a fault in a computer system and solving technical problems. It starts with general issues and then gets more specific.

### 5.1.1 Hardware Troubleshooting Procedures

Hardware troubleshooting is the process of reviewing, diagnosing, and identifying operational or technical problems within a hardware device or equipment. It aims to resolve physical and/or logical problems and issues within computing hardware. On the other hand, software troubleshooting is the process of scanning, identifying, diagnosing, and resolving problems, errors, and bugs in software.

Computers can malfunction and get damaged if computer users are not aware of some of the basic procedures for checking hardware problems. Many computer problems can be solved by checking the following simple hardware problems:

- Check that your computer is plugged into a working power outlet
- Check that everything is turned on
- If the computer is on but the screen is blank, there may be an issue with the connection between the computer and the screen. First, check to see if the monitor is plugged into a power outlet and if the connection between the monitor and computer system unit is connected properly
- Check that the keyboard, mouse, monitor, speakers, etc. are properly plugged into the computer system. Try a different port to check if it is a port issue, or change the device if the device is faulty

**Note:** It is necessary to switch off the computer before undertaking any hardware maintenance such as removing or replacing computer components.

### 5.1.2 Check POST

POST stands for Power On Self-Test. This is part of a computer's startup program that is used to diagnose the keyboard, the Random Access Memory (RAM), disk drives, and other hardware to make sure they are working properly. If the POST detects any errors in the hardware, it either displays a text error message on the screen or emits a series of short and long beeps.

If an error message appears as you boot your computer, type the exact error message and then search on the Internet to find more information about the error.

### Activity

1. If your computer cannot start, what are the preliminary hardware diagnoses you do to identify and fix the problems?

### 5.1.3 Beep Codes

Beep codes are sounds emitted by the computer during Power on Self-Test (POST). Each BIOS manufacturer has a unique beep sequence, a combination of long and short beeps, for hardware failures. If there is a problem with the computer, listen for the beep codes when the computer starts. As the system proceeds through the Power on Self-Test (POST), most computers emit one beep to indicate that the system is booting properly. If there is an error, you might hear multiple beeps. You need to document the beep code sequence and search on the Internet to determine the specific problem. Some of the beep codes and the respective problems are as follows:

- **No beep but the system turns on and runs fine** - Under normal circumstances, most computer systems will beep one short beep when turned on. If your computer doesn't produce a beep sound, your "beeper" may have died out.
- **No beep** - The power supply is not plugged in or turned on. If not, the power supply is completely dead.
- **Steady, short beeps** - The power supply may be bad or the voltages might be wrong. A replacement would usually be necessary.
- **Steady, long beeps** - The power supply has gone bad.
- **Long, continuous beep** - Your Random Access Memory (RAM) sticks may have gone bad. If there is more than one stick installed, try taking one out to see if the computer boots. If it does not, try the same thing with the other stick. This will tell you which stick has gone bad, and you can replace or upgrade accordingly. If there is only one stick installed, you will need to replace or upgrade it to fix the problem.
- **One long, two short beeps** - There has been a video card failure. Your first action is to try reseating the video card. This often solves the problem when the computer system is connected to projectors because the VGA/DVI or Video cable gets moved so often that the card can be slowly unplugged. If reseating doesn't work, replace the video card.

### 5.1.4 BIOS Information

BIOS stands for basic input/output system. BIOS is a program used by a computer to start the computer system after it is powered on. It also manages data flow between the computer's operating system (OS) and attached devices, such as the hard disk, video adapter, keyboard, mouse, and printer. If the computer boots and stops after the POST, your computer has a BIOS setting problem. Fixing BIOS problems requires a good knowledge of computer hardware. Therefore, when you face a BIOS setting problem, you are advised to contact a computer hardware technician to solve the problem.

### 5.1.5 CMOS Error

The CMOS (Complementary Metal-Oxide Semiconductor) is an onboard chip that stores information ranging from the time and date to system hardware settings; its primary function is to handle and store the BIOS configuration settings. If a computer shows a CMOS alert message on the screen, it indicates that the CMOS battery needs to be replaced. Upon receiving such type of error message, remove the CMOS battery carefully, and insert a new battery that is exactly the same as the old one.

**Note:** Replacing a CMOS battery may be more difficult in laptop computers than in desktop computers. If the user of the computer does not have sufficient computer hardware troubleshooting experience, leaving the task to a professional computer technician is recommended.

### 5.1.6 Event Viewer

When system or application errors occur on a computer running Windows, the Event Viewer is updated with information about the errors. The Event Viewer records the following information about the problem:

- The problem that occurred
- The date and time of the problem
- The severity of the problem
- The source of the problem
- The event ID number
- Which user was logged in when the problem occurred

The following steps can be followed to launch the Event Viewer:

1. On the Windows Search box, write event viewer
2. A pop-up menu appears which looks like the one shown in Figure 5.1
3. Click on Event Viewer

**Figure 5.1: Launching Event Viewer**  
The image shows the Windows search interface with "event viewer" typed in the search box. Search suggestions appear below, showing "Event Viewer" as a desktop app option along with other search results.

Events are placed in different categories as shown on the left side of Figure 5.2. Expand each category to get more information. Each category is related to a log that Windows keeps on events regarding that particular category. While there are a lot of categories, the vast amount of troubleshooting you might want to do is related to the Windows Log category, which contains the following items:

- **Application**: The Application log records events related to Windows system components, such as drivers and built-in interface elements.
- **System**: The System log records events related to programs installed on the computer.
- **Security**: When security logging is enabled (it is off by default in Windows), this log records events related to security, such as logon attempts and resource access.

**Figure 5.2: Event Viewer**  
The image displays the Event Viewer interface with a left-hand navigation pane showing various log categories including Custom Views, Windows Logs (with Application, Security, System subfolders), and Applications and Services Logs. The main pane shows a list of events with columns for Level, Date and Time, Source, Event ID, and Task Category. The right-hand side shows action options.

When you click on Application under Windows log, you get a list of Application log records.

If you want to get detailed information about the error, double-click on the error, and then you get detailed information in the pop-up window. Although the Event Viewer lists details about an error, you might need to do further searching on the Internet about the problem to identify an appropriate solution.

### 5.1.7 Hardware Problems

Many computer problems are caused by hardware failures or problems with hardware drivers. Windows usually displays notifications about devices that have a problem. Device Manager is used to check the status of different hardware devices. The following steps can be followed to identify hardware problems in Windows-based systems:

1. Click on the Windows search box in the lower-left corner
2. Type Control Panel
3. Double-click the Control Panel on the Windows pop-up menu
4. Click Hardware and Sound
5. Under Devices and Printers, Click on Device Manager (see Figure 5.3)

**Figure 5.3: Windows Control Panel**  
The image shows the Control Panel interface with various category options displayed in a grid layout. Visible categories include "Devices and Printers," "AutoPlay," "Sound," "Power Options," "Windows Mobility Center," and "Infrared." The "Devices and Printers" option is prominently displayed with an icon.

The Device Manager has the following four functions:

1. It works as a centralized utility from which all the hardware on a system can be configured.
2. It provides a central and organized view of all Microsoft Windows-recognized hardware installed on a system.
3. It helps to manage all the hardware devices installed on a system. This includes keyboards, hard disk drives, USB devices, etc.
4. It helps to change hardware configuration options, manage drivers, enable or disable hardware, identify conflicts between hardware devices, and troubleshoot hardware problems.

When you click on the Device Manager on the Control Panel as shown in Figure 5.3, the Device Manager window is displayed (see Figure 5.4). The devices that have a problem would have an error icon displayed right next to the name of the device. The operating system flags the devices with an error icon:

- A **yellow triangle with an exclamation mark** indicates that the device has a problem.
- A **red X** means that the device is disabled or removed or Windows can't locate the device.
- A **downward-pointing arrow** means the device has been disabled.
- A **yellow question mark** indicates that the system does not know which driver to install for the hardware. This problem will be solved by installing the appropriate driver software for the device.

**Figure 5.4: Device Manager**  
The image shows the Device Manager window with a tree view of hardware categories including "Audio inputs and outputs," "Batteries," "Bluetooth," "Computer," "Disk drives," "Display adapters," "DVD/CD-ROM drives," "Human Interface Devices," "Imaging devices," and others. The window has a menu bar and toolbar at the top.

### Activity

1. Open the Device Manager and check if there is any problem on your DVD/CD-ROM drive.
2. If you find a yellow triangle with an exclamation mark on one of your hardware devices, what will you do to solve the problem?

### 5.1.8 Diagnostic Tools

Diagnostic Tools are software tools that are used to help troubleshoot, diagnose and solve hardware problems. Manufacturers of system hardware usually provide diagnostic tools of their own. For instance, a hard drive manufacturer might provide a tool to boot the computer and diagnose why the hard drive does not start the operating system.

The top two diagnostic tools are Windows Performance Monitor and Windows Resource Monitor.

#### a) Windows Performance Monitor

The performance monitor gives a quick view of vital information about computer hardware. The computer's CPU, Memory, Disk, and Ethernet information can be checked from there. Performance Monitor is used to examine the effects of running applications in both real-time and by collecting data to check out for later analysis.

For example, to view the Performance Monitor, the following steps can be followed:

1. Press CTRL + ALT + Delete button at the same time
2. Choose Task Manager, and the window shows what appears in Figure 5.5
3. Then click on the Performance tab to see the performance of the CPU and other devices in the computer

**Figure 5.5: Task Manager**  
The image shows the Task Manager interface with the Performance tab selected. It displays real-time graphs for CPU utilization (showing 47% usage), Memory usage, Disk activity, and Ethernet network activity. The CPU section shows multiple cores with utilization percentages. The left sidebar lists processes and their resource usage.

**Notes**
- One quick way of reducing the load from the CPU in Windows is to restart the computer to remove any unwanted temporary files. Make sure that all files are saved before proceeding with this step.
- The other option is to look for the applications that are using maximum CPU resources on the Task Manager. If any application shows CPU usage of almost 100%, disable the application and then start it again.

### Activity

- Open Task Manager and see if any applications are using excessively large amounts of the computer's CPU or memory, and if there are any, disable them.

#### b) Windows Resource Monitor

Windows Resource Monitor is better suited for tracking CPU, Network, Memory, and Disk usage. This tool allows you to take an in-depth look into which processes are affecting the CPU, how much memory is being used, the disk activities, and the network information such as current TCP (Transport Control Protocol) connections, and which processes are listening on which ports.

The following steps can be followed to open the Windows Resource Monitor:

1. On the Windows search box, write Resource Monitor
2. Click on the Resource Monitor, and then the window shows what appears in Figure 5.6

**Figure 5.6: Windows Resource Monitor**  
The image displays the Resource Monitor interface with multiple tabs (Overview, CPU, Memory, Disk, Network). The Overview tab shows graphs for CPU usage (43%), Disk I/O, Network activity, and Memory usage. Below the graphs are detailed sections listing processes, their CPU usage, memory consumption, disk activity, and network connections. The processes are color-coded with black for running, blue for suspended, and red for not responding.

Clicking on the CPU tab in the Windows Resource Monitor lists the four sections namely, Processes, Services, Associated Handles, and Associated Modules. The processes that are running are shown in black color under the Processes section, and those that are suspended are shown in blue color while the processes that are not responding are shown in red color. Upon selection of a specific running process from the Processes section, the related data under the Services, Associated Handles, and Associated Modules get highlighted.

If you find your computer slowing down unexpectedly, take a look at the CPU column. If an application is taking up a lot of CPU resources, shut down the application and restart it.

To stop the application:
1. Open resource monitor window
2. Right-click on the application
3. Click on End process

If you want to know more about an application, you can follow the following steps in the Resource Monitor window:
1. Right-click on the name of the application
2. Choose Search online

This opens your default browser displaying the search result of the application on the default search engine of your browser. Click on the application links and learn more about the application.

### Activity

1. What do you understand by hardware troubleshooting?
2. If your computer is slow, what will be the possible problem and what course of action can you take to solve it?

## 5.2 Basics of Preventive Maintenance

### Brainstorming

Reflect on any preventive maintenance methods you are aware of.

Preventive maintenance is the practice of routinely taking measures in hardware administration that reduces the risk of hardware failures. It also improves the likelihood of quick recovery in the event that a failure does occur. Maintenance activities include performing diagnoses on different hardware components such as circuit boards and memory and replacing any components that show signs of excess wear. It also includes keeping hardware components clean from dust to reduce the likelihood of overheating and hardware failure.

### 5.2.1 Preventive Maintenance for Dust

There are various ways of cleaning dust off the computer. Some examples of preventive maintenance against dust such as Cloth, chemical cleaners, and vacuum cleaners are presented below.

#### 1) Cloth

The outside of the computer case can be cleaned using a soft cotton cloth. Special cleaning cloth like microfiber cloth is effective in removing dust without damaging screens. Microfiber cloth is made from a high-quality material that absorbs and removes all fingerprints, smudges, oils, and dust from the screen. Use of this material as a first step before applying any liquid sanitizing wipe or screen cleaner is recommended.

**Figure 5.7: Microfiber Cleaning Cloth**  
The image shows a microfiber cleaning cloth being used to wipe a computer screen or monitor. The cloth appears soft and designed specifically for electronic displays.

#### 2) Chemical Cleaner

There are different chemical cleaners in the market which can be used to clean computer screens. Alcohol-Free Sprays such as Koala Cleaner are safe for all kinds of screens. It can be used on all screens from tablets to monitors.

#### 3) Vacuum Cleaner

Dust on the outside of a computer can travel through cooling fans to the inside part of the computer. Accumulated dust prevents the flow of air and reduces the cooling of components. Hot computer components are more likely to break down. Using a combination of compressed air, a low-air-flow vacuum cleaner, and a small lint-free cloth, dust can be removed from the inside of a computer. It is good to make it a regular habit like monthly to clean computers' air ventilators, connection ports, and keyboards with a vacuum cleaner.

### 5.2.2 Run Antivirus

A computer virus is a type of computer program that (when executed) replicates itself by modifying other computer programs and inserting its own code. Computers may be infected with viruses when they are connected to the Internet or when someone else's flash disk is inserted into a computer system. Virus infection is not detected until it creates a problem on the computer.

Antivirus, which is also known as anti-malware, is a computer program used to prevent, detect and remove malware. There are freeware and commercial antivirus software. The freeware antivirus software can be freely downloaded and used. Some examples of free antivirus software are AVAST, AVG, AVIRA, and Kaspersky.

In order to install antivirus software:
1. Search the antivirus software, for example, on Google
2. Then click on the search result on the name of the Antivirus software you want to download (see Figure 5.8)
3. You can directly install from the Internet or save the antivirus software on your hard disk
4. If it is saved on the hard disk, install the antivirus software in the same way you install other types of application software by starting the setup file

**Figure 5.8: Installing Antivirus Software**  
The image shows a Google search results page for "antivirus." Prominent results include "Download Free Antivirus Software | Avast 2021 PC Protection," "Download Free Antivirus & VPN | 100% Free & Easy - Avast," and other antivirus options. The search bar shows the query "anti virus raps" which appears to be a typo.

It is important to run the antivirus program on a regular basis to make sure any changes made, or files that are downloaded have not compromised the system. Additionally, running the antivirus program is important because some malicious programs embed into systems without warning and require specific actions to trigger. Scanning computer systems regularly with antivirus software helps prevent the computer system from virus infection.

### Activity

1. Discuss the problems you will face if you do not have installed antivirus software on your computer.
2. Reflect on computer problems that will be caused by viruses.

### 5.2.3 Backups

Backup is a process of transferring data or files from a computer system to external storage devices. The backup file is used to recover data loss during computer failure. Computer users should have at least one method for backing up users data, whether it is on a cloud storage server or an external hard drive (see Figure 5.9). It is necessary to take time to update the backups as frequently as needed. If up-to-date backups are available, computer users will not have to worry about losing a day's work in the event a PC is unexpectedly damaged.

**Figure 5.9: Data Backup**  
The image shows two backup methods side by side. On the left, "Cloud Backup" is represented with a database icon connected to a cloud symbol. On the right, "Local Backup" shows the same database icon connected to an external hard drive or local storage device.

**Note:** Backup is the first step before any troubleshooting on a computer system is done. If a backup has not been taken, do not take any troubleshooting activity. Before undertaking any troubleshooting, it is recommended to check with the computer user about the date of the last backup, contents of the backup, data integrity of the backup, and availability of all backup media for data recovery.

The following steps can be followed to take a backup on a Windows-based computer:

1. Open the Control Panel
2. Choose Backup and Restore
3. Choose Set up backup
4. The window will be displayed as shown in Figure 5.10

**Figure 5.10: Disk Backup Window**  
The image shows the Backup and Restore (Windows 7) interface in Control Panel. The window displays options for "Create a system image," "Create a system repair disc," and indicates that "Windows Backup has not been set up." There is also a restore section showing that no backup was found.

5. Click on Create a system image
6. Select the storage drive either a hard disk, DVD disk, or a Network drive where you intend to store your backup
7. Then click on the next button, and
8. Finally click on the start backup button

**Note:** You can alternatively write "backup" on the Windows search box at the lower left corner, and then select backup settings to open the backup options.

### 5.2.4 Scan Hard Disk

When old files are deleted from the hard disk and new files are saved, the files become fragmented. Fragmentation is the scattering of portions of files in the disk in nonadjacent areas, thus greatly slowing access to the files.

When a hard disk is new, the operating system puts files on the disk contiguously (next to one another). However, when a file is updated over time, new data for that file is distributed to unused spaces. These spaces may not be contiguous to the older data in that file. It, therefore, takes the operating system longer to read these fragmented files.

A defragmenter utility program, commonly called a "defragger," finds all the scattered files on the hard disk and reorganizes them into the smallest number of adjoining regions (See Figure 5.11). In other words, defragmentation is a process that reduces the degree of fragmentation. This increases the computer's performance.

**Figure 5.11: Disk Defragmentation**  
The image shows two disk representations side by side. The left side labeled "Fragmented Disk" shows files scattered in nonadjacent blocks across the disk surface. The right side labeled "Defragmented Disk" shows files organized in contiguous blocks, making data access more efficient.

The following steps can be followed to undertake disk defragmentation:

1. Type Windows Administrative Tools on the Windows search box and click on Windows Administrative Tools
2. Double-click on Defragment and Optimize Drives
3. Then the window shown in Figure 5.12 will be displayed
4. Select the drive, and then click on the Optimize button

**Figure 5.12: Disk Optimization Window**  
The image shows the Optimize Drives window listing available drives with their media type, last analyzed date, and current status. It shows Drive (F:) and System Reserved drive, both with "OK (0% fragmented)" status. There is an "Analyze" button, "Optimize" button, and "Change settings" option for scheduled optimization set to "Weekly."

**Note:** As shown in Figure 5.12, if the drive's current status says (0% fragmented), there is no need to do defragmentation.

### 5.2.5 Power Protection Devices

Electric power causes many problems on computer hardware components. The following tools are used as a means to prevent potential damages that can be caused by electric power:

#### 1) Use a surge protector to protect against too much electricity

Plug all your hardware into a surge protector (suppressor), which will prevent damage to your equipment if there is a power surge (See Figure 5.13).

#### 2) Use a stabilizer to ensure the level of voltage being supplied at a desired level

Plug your computer into a stabilizer to adjust for power variations, which will deliver a consistent voltage level to the equipment. Power fluctuations can cause damage to electrical motors and components. This damage could be severe and immediate. It may result in a shorter operating life.

**Figure 5.13: Power Surge Protectors**  
The image shows several power protection devices. On the left is a surge protector with multiple outlets and an on/off switch. In the center is a voltage stabilizer with a display showing voltage levels. On the right is another type of power protection device. All are designed to protect computer equipment from electrical irregularities.

#### 3) Use a voltage regulator to protect against too little electricity

Plug your computer into a voltage regulator (also called a line conditioner) to adjust for power sags or brownouts.

#### 4) Consider using a UPS to protect against the complete absence of electricity

Consider plugging your computer into a UPS (Uninterruptible Power Supply). The UPS is kind of a short-term battery that (when the power fails) will keep your computer running long enough (5–30 minutes) for you to save your data before you turn off the computer. It also acts as a surge protector.

**Figure 5.15: Uninterruptible Power Supply (UPS)**  
The image shows a UPS device, which is a battery backup unit that provides emergency power to computers during power outages. It typically has outlets for connecting computer equipment and may include features like surge protection and voltage regulation.

### 5.2.6 Shut Down Properly

At the end, make sure you save your work before closing all your programs and shutting down your PC. Leaving your PC turned on when it is not used prevents it from cooling, and can impact the machine's performance. If shutting down interferes with your daily routine or business requirements, put your computer into a low-power or hibernation mode instead.

### Activity

1. Discuss the purpose of taking backups of your computer files.
2. Reflect on the effect of disk fragmentation on your computer performance.

## Unit Summary

In this unit, you have learnt about:

- What is meant by hardware troubleshooting and preventive maintenance
- Messages of POST, which stands for Power On Self-Test
- Beep code sounds as alert message for hardware failures
- What is meant by CMOS alert message
- How to identify system or application errors through event viewer window
- How to identify and troubleshoot hardware problems through device manager
- How to use Diagnostic Tools to diagnose and troubleshoot hardware problems
- How to use Windows Resource Monitor to track CPU, Network, Memory and Disk usage
- The different hardware prevention mechanisms
- How to clean a computer from dust
- What is meant by Virus and Antivirus software
- How to protect a computer from virus
- How to undertake system data backup
- What is meant by disk fragmentation and defragmentation
- Mechanisms for protecting computers from power problems

## Key Terms

**Antivirus** - Computer software that is used to clean viruses from a computer system.

**Backup** - A process of transferring data or files from a computer system to external storage devices so as to recover data lost during a computer failure.

**Beep codes** - Sounds emitted by the computer during Power on Self-Test (POST).

**BIOS** - A program used by a computer to start the computer system after it is powered on.

**CMOS (Complementary Metal-Oxide Semiconductor)** - An onboard chip that stores information ranging from time and date to system hardware settings.

**Diagnostic Tools** - Software tools that are used to help diagnose and solve hardware problems.

**Power On Self-Test (POST)** - Part of a computer's startup program that is used to diagnose the keyboard, the Random Access Memory (RAM), disk drives, and other hardware to make sure they are working properly.

**Preventive maintenance** - A regular and systematic inspection, cleaning, and replacement of worn parts, materials, and systems that ensure computer hardware have long and productive life.

**Troubleshooting** - A systematic approach to locating the cause of a fault in a computer system and solving technical problems. It starts with general issues and then gets more specific.

**Virus** - A type of computer program that (when executed) replicates itself by modifying other computer programs and inserting its own code.

## Review Questions

### Part I: Write True if the statement is correct and False if it is incorrect

1. Preventive maintenance is a regular and systematic inspection, cleaning, and replacement of worn parts of the computer to ensure smooth operation of the organization
2. Troubleshooting is a systematic approach to identify and solve hardware problems.
3. Cleaning dusts off from the inside and outside parts of a computer system may lead to hardware problems.
4. Beep codes are used to identify software problems on a computer system.
5. Diagnostic Tools are software tools that are used to diagnose hardware failures.
6. Antivirus is software that is used to prevent, detect and remove malware.
7. Backup is used to clear viruses from a computer system.
8. Disk fragmentation reduces the speed of a computer.
9. A surge protector is used to protect a computer against too little electricity.
10. When a computer is not used, shutting down computers is useful for a longer life of hardware

### Part II: Fill the blank spaces

1. ________ sounds indicate a hardware problem on a computer system.
2. ________ are software tools that are used to help troubleshoot, diagnose and solve hardware problems.
3. A data protection mechanism through copying data from a computer system to external storage devices is known as ___________________.
4. A type of software that is used to clean virus from a computer system is called ________________.
5. A regular and systematic inspection, cleaning, and replacement of worn hardware components is called _________________________.

### Part III: Give short answers to the following questions

1. What is hardware troubleshooting?
2. What is a software tool that is used to check the status of different hardware devices?
3. What are the different hardware preventive maintenance methods?
4. What are the software tools used to monitor the performance of a computer system?
5. How do you solve the problem of slow CPU performance while it is in operation?

### Part IV: Discussion Questions

1. Discuss in groups the problems organizations face if they do not take timely backup?
2. Form a group and maintain a computer that does not work entirely. Write down the procedures you followed to identify the problem and fix the problem. Share your experience with the class.
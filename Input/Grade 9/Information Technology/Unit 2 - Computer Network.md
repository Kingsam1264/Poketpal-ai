# Unit 2: Computer Network

## UNIT OUTCOMES

### At the end of this unit, learners will be able to:

- Define what a computer network is.
- Identify the building blocks of a computer network.
- Compare and contrast the basic types of networks (LAN, MAN, WAN) and client server vs. peer to peer.
- Describe the topologies of network.
- Discuss the advantages and disadvantages of network.
- Draw simple network diagrams using network device symbols.

## UNIT OVERVIEW

This unit focuses on computer network, mainly on Internet and Internet services emergence. You learned about Internet and its services in grades 7 and 8. Do you remember the different services that you can get from the Internet such as web surfing for searching information, file sharing, chatting, messaging, and social media networks? There are also serious risks associated with unsafe and improper utilization of networks.

This unit discusses fundamental concepts of computer network. The unit is divided into four sections. The first section defines what a network is and is followed by listing and describing different components of a computer network, both the software and hardware parts. The last two sections present types of network and advantages and potential threats of connecting computers or other electronic devices into a network.

## 2.1 Definition of Network

### Brainstorming

1. Have you shared a file or received a message using mobile phone? How do you think that your file or message move around to reach its destination?
2. Identify different organizations in your local areas that utilize computer networks for their services.

A network is a connection of two or more computers that are linked together in order to share resources (such as printers, files and disks) or allow electronic communications. Using Bluetooth application in your mobile phone to share files is an example of a network. Sometimes, the Internet is called the largest global network. Figure 2.1 shows an example of a network with multiple computers and other network devices, which are all connected. The figure shows that the laptop, the tablet, the mobile phone and the television are connected to the central network device. The central network device is, in turn, connected with a global network through an internet service provider (ISP) company such as Ethiotelecom. You will learn more about these in the next sections.

**Fig 2.1: Home network –**  
The image depicts a home network setup showing a Television, Tablet, ISP, Laptop, and SmartPhone all connected to a central network device, which connects to a global network through an Internet Service Provider.

### Activity

Form a group of three to five students and discuss the following questions:

1. What is a computer network?
2. What are the applications of network in our day-to-day lives?

## 2.2 Fundamental Elements of Network

Networks are comprised of four basic elements: hardware, network software, protocols and connection medium. All data networks are comprised of these four elements, and cannot function without them. The backbone of any network is the hardware that runs it. As you can see from the top two rows in Figure 2.2 below, network hardware includes end devices and intermediary devices.

Network software is also a foundational element for any network. This type of software helps to manage connected end devices and services the network provides. Protocols are set of rules to facilitate electronic communication across connected device. You will learn more about protocols in Grade 10. Transmission medium which can be wired or wireless, carries message between end devices.

Each element of networks is described one by one in section 2.2.1 to 2.2.4 below. Figure 2.2 shown in the next page presents examples of the hardware elements in the three categories.

**Fig 2.2: End devices, intermediary devices and media –**  
The image shows three categories: End Devices (Desktop, Tablet, Laptop, IP Phone), Intermediary Devices (LAN Wireless Router, Switch, Firewall, Router), and Network Media (UTP Cable, Wireless Antenna).

### 2.2.1 End Devices

#### Brainstorming

Consider different electronic devices at home, e.g. digital camera, laptop, mobile, television, etc. Which of the devices do you see connected with cable or other formats?

End devices, which are also called hosts, are devices used to send or receive data over the network. The sending device is called a sender and the receiving one is a receiver. Some examples of end devices are:

- Computers (such as desktops, laptops, file servers and web servers etc.)
- Network printers
- Security cameras
- Mobile handheld devices

### 2.2.2 Intermediary devices

Intermediary devices interconnect end devices. These devices interconnect and work behind the scenes to ensure data flow across the network and the devices. Intermediary devices connect the individual hosts to the network and also can connect multiple individual networks to form an internetwork. Intermediary device includes network cards, routers or network switches, wireless access point (WAP) and repeaters. Without these hardware devices, end devices have no means of accessing a network.

#### a. Network Interface Card (NIC)

Network Interface Card (NIC) is a computer hardware component that connects a computer to a computer network. As it is shown in Figure 2.3, Network Interface Card (NIC) comes in a card form to be plugged into the computer system or can be an integrated one as part of the systems board that you often see in laptops. NIC has a slot to plug-in a cable connection with a network.

**Fig 2.3: a) Network interface card b) Cable to be plugged in to a desktop computer NIC –**  
The image shows a NIC card with its port, and a cable that plugs into a desktop computer's NIC.

#### b. Repeater

Communication media or cables that you are going to learn in section 2.2.4 have limitation. This includes the electronic signal they carry will become weak after traveling a long distance. Repeater enables a network segment to extend the coverage to reach beyond its inherent distance limitation by refreshing or generating the weak network signal. Figure 2.4 depicts that a weak signal (depicted on top of the Figure) is regenerated by a repeater in the middle to restore the signal to its original signal strength.

**Fig 2.4: Repeater –**  
The image shows a weak signal entering a repeater, which then generates a regenerated signal on the other side.

#### c. Switch

A switch, as shown in Figure 2.5(a), is a device that interconnects various devices such as computers, printers and servers in a small business network, as shown in Figure 2.5b below. Switch is more intelligent device than hub as it can segment a computer network into smaller parts. In addition, switch forwards packets to specific destination after learning the network topology. To perform this, switch uses a table which contains computer physical address and switch port number on which a computer connected on. A hub is unintelligent device which broadcasts all received packets to all computers connected to it except the sender.

**Fig 2.5: a) 24 port switch b) Switch on a network –**  
The image shows a 24-port switch device and a network diagram with a switch connecting multiple devices (PC1, PC2, Tablet, Laptop) to a router and internet.

#### d. Router

Consider yourself as a taxi driver in a given town which has a lot of streets (roads) interconnected. Think about the driver when he or she selects a particular street from many different options available to reach to his or her destination. What factors does he or she consider? The distance? The traffic jam or number of cars in a certain road segment? Which road segment would take him or her where? What else, he or she might think of?

A router is such an intelligent device which operates in determination of pathways for electronic messages in networks. A router, as its name suggests, works with routing or finding a route through a network. That is, it is a router of a network. The main objective of router is to connect dissimilar and different networks simultaneously as shown in below Figure 2.6. As shown in the figure, there are two network segments, each connected to a switch. The two switches are connected to each other through the router. Assume two different cases:

Case 1: A computer sends a message for another computer within one network; that is, both the sending and the receiving computers are connected to the same network segment.

Case 2: A computer in one network segment sending a message to another network connected to a different network segment.

The router usually works for case 2 type scenario and it selects best route to reach to the destination network. To do this, a router uses a mechanism called routing table, which contains destination network field and interface number of the router.

**Fig 2.6: Router connecting two networks –**  
The image shows two network segments, each with a switch, connected through a central router.

#### e. Wireless Access Points

#### Brainstorming

Discuss in a group of three to five students about different methods that you could use to connect handheld mobile phones to the network.

A wireless access point (WAP) is an intermediary device in a network that connects various types of wireless communication devices with wireless networks. The connectivity is made possible through Bluetooth and Wi-Fi technologies. It acts as an intermediary between wireless and wired devices that are part of a network (See Figure 2.10 in Section 2.3.1).

### 2.2.3 Communication Protocol

#### Brainstorming

1. Do people have a convention, protocol or set of rules when they communicate, for example when they talk on phone or write a letter, email, etc.? Have you learned about formal and informal letter writing in your English or local language subjects? How do you write sender's and receiver's addresses in the letter? Are these not protocols? What others common protocol do you remember?
2. What will happen if an individual does not follow a protocol?

In networking, a protocol is a set of rules that governs data communications. In order for different network hardware to interact with the network, they should follow the same rules called protocols. It is software that instructs network devices on how to connect to the network and how to interact with one another. Internet Protocol (IP) is one of the important communication protocols and used for addressing network devices and forwarding data from one network to another. You will learn IP and its classes in detail in grade 10.

### 2.2.4 Connection Media

#### Brainstorming

Why are the telecommunication cables stretched across the streets and roads? What about the big mobile antenna towers that stood on the hills and in the towns?

Without physical connections (wired or wireless), a network cannot function. The connection media are the media which are used to carry the message from sender to receiver. We have two types of communication medium: wired and wireless.

- **Wired medium:** It is also called guided medium. It is a cable that connects end devices. Copper and fiber optic cables are examples of wired medium. The most common copper cable used in networks today is unshielded twisted-pair cable (UTP), which uses electric signal to transmit message for a maximum distance of 100 meters. Fiber optic cable uses light to transmit signal at faster speed and longer distance than copper cable.

- **Wireless Medium:** It is also referred to as unguided media or unbounded transmission media. It is used to communicate information through the air, water or vacuum, e.g. radio Waves, micro waves, infrared waves and satellite communications.

Figure 2.7 below presents some examples of wired and wireless communication media along with their connectors. You will cover the communication media in detail in grade 10.

**Fig 2.7: Types of communication medium –**  
The image shows three types: Copper Wire with RJ45 connector, Fiber Optics with optical connectors, and Wireless with antenna symbol.

### Activity

Form a group of three to five students and work on the following:

1. Visit your school network or computer laboratory and identify fundamental elements of network available.
2. Ask the network administrator or the laboratory manager about some network protocols used/implemented in the design of the school network?
3. Find an unshielded twisted-pair (UTP) cable, analyse its connectors, the number of wires inside the plastic shield, colour of each wire and order of the colours.
4. Ask the responsible person about which interconnecting devices are used to set-up the network at your school and roles or functionalities of the devices in the school's network.
5. Compile an activity report and reflect it in your notebook.

### Practical Exercise

Form a group of two to three students and work on the following:

1. Search the internet for Cisco and Huawei network device symbols that are covered in the classroom.
2. Use these symbols and draw simple network diagram that consists of the fundamental elements of network.
3. Draw a network diagram specified in Figure 2.6 using a Cisco packet tracer, Graphical Network Simulator 3 (GNS3) or on paper using the right symbols.

### KEY CONCEPTS

- Network is connection of two or more devices for sharing resource which can be data, hardware, software, etc.
- A given network comprised of the following four basic elements: hardware, software, protocol and connection medium.
- End devices are senders and receivers and able to send and receive messages.
- Intermediary devices are used to interconnect end devices together in the same and different networks.
- Protocols are common rules followed by communicating parties to govern communication in a network.
- Transmission medium is a physical path between sender and receiver, used to carry network signal.
- There are two types of transmission medium: wired and wireless.
- Switch is used to create a local area network whereas Router is used to interconnect different local area networks.

## 2.3 Types of Networks

### Brainstorming

Consider networks at your home, if any, or at your school. Consider also the network that belongs to such a big company, like Ethiopian Airlines, that has branch offices throughout Ethiopia and abroad. Are the network technologies and number of end devices connected the same among these networks? Discuss how they are the same or different.

There are different types of network classified based on the following four categories:

- Network media
- Size of the network or geographical coverage of the network
- Topology
- Resource security and access

The type of network based on this categorization is depicted in Figure 2.8 below. Each type of the network depicted in Figure 2.8 is discussed in subsection 2.3.1 to 2.3.4.

**Fig 2.8: Types of networks based on different perspectives –**  
The image shows a diagram categorizing networks: Based on Connection Medium (Wired, Wireless), Based on Network size (Personal Area Network PAN, Local Area Network LAN, Metropolitan Area Network MAN, Wide Area Network WAN), Based on Topology (Bus, Star, Ring, Mesh), and Based on Resource Security and Access (Peer-to-Peer, Client-Server).

### 2.3.1 Types of Network Based on Connection Medium

Based on connection medium, computer networks are classified into wired and wireless networks.

#### Wired Network

Wired networks, also called Ethernet networks, are the most common type of local area network (LAN) technology. A wired network is simply a collection of two or more computers, printers, and other devices linked by Ethernet cables. This is shown in Figure 2.9, as an example, where each line connects the end devices and servers to the global network (the globe).

**Fig 2.9: Wired network –**  
The image shows multiple computers (PC1, PC2, PC3) and a Data Server connected via cables to a central point which connects to the Internet, represented by a globe.

#### Wireless Network

If you compare Figure 2.10 below, which is a wireless network, with Figure 2.9 above, you will see a wireless access point connecting with a wireless or a wired computer and a modem, which connects the network with the Internet (or cloud). Wireless networks have no physical connection with the wired network; instead they get connected through the wireless access point (WAP). A wireless network, which uses high-frequency radio waves rather than wires to communicate between nodes, is another option for home or business networking.

Individuals and organizations can use this option to expand their existing wired network or to go completely wireless. Wireless network allows for devices to be shared without networking cable which increases mobility.

**Fig 2.10: Wireless network –**  
The image shows a Cloud (Internet) connected to a Modem, which connects to a Wired Access Point. Various devices connect wirelessly: Computer, Notebook, and Network Printer.

**NOTE:** The backbone of wireless network is always a wired network.

### Activity

Ask your parents or adults you have close contacts with about the following and discuss them in your classroom:

1. Ask your parent or any person about different networks which exist in your city, town or village.
2. Based on the description you got from your activities in question number 1 above, discuss the types of the network that at least one of the organizations has in terms of connection medium, wired, wireless or a mixed one?
3. Discuss also what types of end and intermediary devices the network could potentially have in the organization, with a reason for your device type identification.

### 2.3.2 Types of Networks Based on Size

Computer networks can be characterized by their sizes. The size of a network can be expressed in terms of the geographic area the network occupies and the number of computers connected to the network. Networks can cover anything from a handful of devices within a single room to millions of devices spread across the entire globe.

In Figure 2.11 and Table 2.1, we classify networks by their rough physical size. The smallest in size is the personal area networks (PAN), networks that are meant for one person. Beyond PAN, with varying coverage range are categorized into local, metropolitan and wide area networks, each with increasing scale.

Some of the network types based on size are:
- Personal area network or PAN
- Local area network or LAN
- Metropolitan area network or MAN
- Wide area network or WAN

**Fig 2.11: PAN, LAN, MAN and WAN –**  
The image shows four concentric circles representing network sizes: PAN (personal), LAN (local), MAN (metropolitan), and WAN (wide).

**Fig 2.11: PAN, LAN, MAN and WAN Descriptions –**  
A table showing network types by distance: PAN (1m, Square Meter), LAN (10m-1km, Room to Campus), MAN (10km, City), WAN (100km-10,000km, Country to Planet).

#### Personal Area Network (PAN)

A personal area network (PAN) is a computer network organized around an individual person within a single building. A common example is a wireless network that connects a computer with its peripherals. Almost every computer has an attached monitor, keyboard, mouse and printer. If there is no wireless network, this connection must be done with wires.

A network created by Bluetooth is PAN. Bluetooth is a short-range wireless network used to connect computer's peripheral components without wires as shown in Figure 2.12. In the figure, a laptop, a mobile phone and a television or tablets are connected to one another without a cable. The idea is that if your devices have Bluetooth, then you need no cables. You just put them down, turn them on and they work together.

**Fig 2.12: Bluetooth PAN configuration –**  
The image shows devices (Smart Phone, Tablet, Laptop) connected wirelessly via Bluetooth Access Point in a personal area network.

This type of network provides a great flexibility. For example, it allows you to:
- Send a document to the printer in the office while you are sitting on the couch with your laptop.
- Upload a photo from your cell phone to your desktop computer.
- Watch movies from an online streaming service to your television.

#### Local Area Network

Local Area Network (LAN) is generally an organizational or a privately owned network within a single office, building or campus covering a distance of a few kilometers. The main reason for designing a LAN is to share resources such as storage spaces, printers, programs and data. It also enables the exchange of information.

The smallest LAN may use only two computers while larger LANs can accommodate thousands of computers. A LAN typically relies mostly on wired connections for increased speed and security, but wireless connections can also be part of a LAN. If a LAN is entirely wireless, it is referred to as a wireless local area network (WLAN). Figure 2.13 depicts a LAN that combines cabled and wireless networks into a single network.

**Fig 2.13: Wired and wireless local area networks –**  
The image shows a LAN with both wired and wireless connections, including Internet, Server 1, Server 2, Router, Firewall, LAN Switch, Wifi Router, Printer, and various client devices.

#### Metropolitan Area Network

A Metropolitan Area Network (MAN) is a network that is designed to cover an entire city. Suppose a bank wants to connect three of its branches in a given city. In such a case, the bank will utilize the service of existing telephone network of the city (for example the Ethio-telecom network) to interconnect its offices, through which MAN is created. Figure 2.14 shows a MAN that interconnects a hospital, a school/college and a factory local area networks.

**Fig 2.14: Metropolitan area network –**  
The image shows a MAN connecting different LANs (Hospital LAN, School/College LAN, Factory LAN) across a city.

#### Wide Area Network

A wide area network (WAN) occupies a very large area such as an entire country or the entire world. A WAN can contain multiple smaller networks such as LANs or MANs. The Internet is the best-known example of a public WAN. A diagram depicting MAN is shown in Figure 2.15 below. It indicates that computers residing in different parts of the world are connected to each other through a network.

**Fig 2.15: Wide area network –**  
The image shows a WAN connecting LANs in different countries (Japan, Kenya, Ethiopia, China) via the Internet/Server.

### Activity

Do the following as an extension to Activity 2.3:

Based on the description you got in Activity 2.3 question number 1, discuss the type of the network that at least one of the organizations has in terms of connection medium as well as size of the network.

### 2.3.3 Types of Network Based on Topologies

Network topology defines how various computers or electronic devices represented as nodes are connected to one another in the network. It refers to the physical arrangement of devices in a network. Typical network configurations include bus topology, mesh topology, star topology, and ring topology (See Figure 2.16).

**Fig 2.16: Network topologies –**  
The image shows four topology types: Bus Topology (devices connected to a central backbone), Star Topology (devices connected to central hub), Ring Topology (devices in a circular connection), and Mesh Topology (devices fully interconnected).

#### a. Bus Topology

In bus topology, there is a long cable called bus which acts as a backbone for all the nodes as shown in Figure 2.17. A bus topology network connects each computer or electronic device to a backbone cable (or bus) just like a water pipe system.

**Fig 2.17: Bus topology –**  
The image shows computers (PC1, PC2, PC3, PC4) connected to a bus backbone with taps, and terminators at both ends.

A bus is easy to install and uses less cables than other topologies. However, fault isolation becomes very difficult in bus topology. It is also relatively difficult to add new nodes to a bus, thus making it more inflexible. This is because addition of a node changes the number of taps and the average distance between them, which are generally optimized for a bus length. Another demerit is that, even if a portion of the bus breaks down, the whole bus cannot function.

#### b. Mesh Topology

In mesh topology (also called complete topology), each node is connected to every other node by direct links. Figure 2.18 illustrates this configuration.

Mesh topology does not have traffic congestion problems due to dedicated links. This topology has the advantage in terms of data security. It is also robust; that means, if one link is down, the rest of the network can still continue. Fault identification is also easy in this case. The main demerit of this network scheme is cable length and consequent cost and complexity. This is clearly impractical for medium to large networks.

**Fig 2.18: Mesh topology –**  
The image shows four computers (PC 1, PC 2, PC 3, PC 4) fully connected to each other with direct links.

#### c. Star Topology

In a star topology, each device has a dedicated point-to-point link only to a central controller, usually called a switch. The devices are not directly linked to one another. Unlike a mesh topology, a star topology does not allow direct traffic between devices. If a node wants to send some data to another node, it sends it to this switch. The switch, in turn, sends it to the appropriate node as Figure 2.19 shows.

Star topology is cheaper than mesh topology. It is also relatively easier to install, maintain and reconfigure. It is also robust. However, if the switch goes down, the entire network becomes defunct. This is a major demerit of this topology.

**Fig 2.19: Star topology –**  
The image shows four computers (PC 1, PC 2, PC 3, PC 4) all connected to a central switch device.

#### d. Ring Topology

In ring topology, each node is directly connected to only its two adjacent neighbors. If a node wants to send something to a distant node on a ring, it has to go through many intermediate nodes, which act like repeaters, reproducing the incoming bit stream with full signals on the outgoing line. Figure 2.20 depicts this arrangement.

A ring is easy to reconfigure and install. In a ring, a signal normally circulates all the time. A node not receiving any signal for a long time indicates a fault. Therefore, fault isolation is relatively easy in a ring. However, if a node in a simple ring fails, the whole ring cannot function. Another demerit is that traffic flows only in one direction. This topology is not used if the number of nodes to be connected is very high. Advantages and disadvantages of all network topologies are summarized in below Table 2.2.

**Fig 2.20: Ring topology –**  
The image shows computers connected in a circular ring formation.

**Table 2.2: Advantages and disadvantages of all network topologies**

| Topology | Advantages | Disadvantages |
| :--- | :--- | :--- |
| Bus | - Cheap<br>- Easy to install | - Difficult to reconfigure<br>- Break in bus disables entire network |
| Star | - Cheap<br>- Easy to install<br>- Easy to reconfigure<br>- Fault tolerant | - More expensive than bus |
| Ring | - Efficient<br>- Easy to install | - Reconfiguration is difficult<br>- Very expensive |
| Mesh | - Simplest<br>- Most fault tolerant | - Extremely difficult for reconfiguration<br>- Extremely expensive<br>- Very complex |

### Activity

Do the following as an extension to Activities 2.3 and Activity 2.4:

Based on the description you got in Activity 2.3 question number 1, discuss the type of the network that at least one of the organizations has in terms of connection medium, size and network topologies.

### 2.3.4 Types of Network Based on Resource Security and Access

#### Peer-to-Peer Network

In a Peer-to-Peer network, each machine (computer) is known as peer and can participate in the sharing of files or resources. No server is required in this network, so there is no additional cost for a dedicated machine, but there is also no a real server.

A peer-to-peer network is also called workgroup and there is no hierarchy among the computers. This mean that all computers are peers (equals) and the connection is created for resource sharing and communication purposes only. The number of computers in peer-to-peer network usually does not exceed 10; if the number is beyond this, the network becomes very difficult for management.

**Advantages of peer-to-peer network:**
- Server is not required.
- All computers are equal in the network.
- No additional cost is needed for server.

**Disadvantages of peer-to-peer network:**
- Provides share level security, i.e. it applies a trust-based security.
- Can work in small environments only.

#### Client-server Network

A client-server network involves multiple clients or workstations, connecting to at least one central server. Most resources are installed on the server. When clients need access to these resources, they access them from the server. Servers often have private user directories as well as multiple public directories.

In client-server networks the clients are allowed to function as workstations without sharing any resources. It is easier to upgrade software applications and files because they are held on one single computer. System-wide services can be provided through the server software. Security is enhanced on a client server network because the security is handled by the server. The following table summarizes the difference between peer-to-peer and client server.

**Table 2.3: Comparison of client-server and peer-to-Peer networks**

| S.No | Client-server Network | Peer-to-peer Network |
| :--- | :--- | :--- |
| 1 | Clients and server are differentiated; specific server and clients are present. | Clients and server are not differentiated. |
| 2 | Focuses on information sharing. | Focuses on connectivity. |
| 3 | Centralized server is used to store the data. | Each peer has its own data. |
| 4 | Server responds the service which is requested by client. | Each and every node can do both request and respond for the services. |
| 5 | Costlier than peer-to-peer network. | Less costly than client-server network. |
| 6 | More stable than peer-to-peer network. | Less stable if number of peer is increased. |

**NOTE:** A client is a computer which requests resources and services while a server is a computer which provides services and resources according to client requests. Informally, clients often tend to be desktop PC's or workstations, while servers are more powerful machines.

### KEY CONCEPTS

- There are different types of network based on type of medium, topology and size of the network, and resource security and access.
- Wired network uses cable while wireless uses radio waves to form a network.
- The number of devices connected in the network and the geographical coverage of the network is called the size of the network.
- Based on size of the network, network can be categorized as personal area network (PAN), local area network (LAN), metropolitan area network (MAN) and wide area network (WAN).
- Network topology is the physical arrangement of devices on a network and can be bus, star, ring and mesh topologies.
- Based on security and access, network can be either client-server or peer-to-peer network.

### Activity

Ask your parents or adults you have close contact about the following and discuss them in classroom:

1. Discuss whether peer-to-peer or client-server network is more appropriate for:
   - a. A small home network
   - b. A school laboratory
2. Discuss advantages and disadvantages you considered for the selection of the network type in question 1.

## 2.4 Advantages and Disadvantages of Network

### Brainstorming

Consider networks at your home, if any, or at your school. Discuss the potential benefits as well are risks that emerge from connecting to a network.

### 2.4.1 Advantages of network

There are more advantages to a network than disadvantages. In fact, many companies today would not exist without accessing some form of network. Below are the advantages of a network:

- **Sharing data and information** - One of the biggest advantages of a network is sharing data and information between each of the devices on the network. In addition, networks allow accessing the data which is stored on central computer called database server. For example, we use network for sharing documents, images, photos, songs and videos.

- **Communication** - A network gives all users the ability to quickly communicate with each other either using chatting or instant messaging services such as Skype, WhatsApp and Viber to send files and messages among the users, video conferencing, e-mail, TV and radio.

**NOTE:** Communication at a distant is called telecommunication; 'tele' in Greece is to mean distance.

- **Sharing hardware** – Expensive hardware devices connected to a network can be shared among all users.
  - Storage devices such as Hard Disk that are shared on a storage server, which is also called NAS (Network attached storage), can store and access vast amounts of information.
  - A printer which is attached and shared on a server (printer server) allows all network users to print from one printer according to their privilege configured on the server by a network administrator.
  - Fax machines, Scanners, more powerful computers, such as super computers that can perform complex tasks within short period of time than a single computer will take to accomplish.

- **Share software** – Different application software and Internet-based services can be shared over the network for all licensed users for the software. For instance, we can share software such as computer games and work Internet-based services such as e-learning. E-learning or learning management system in its broadest sense is designed to support teaching and learning as well as student-to-student and student-to-teacher communications.

- **Transferring money** - Being connected to a secure network allows a person or business to digitally transfer money between banks and users. For example, a network could allow a company not only to manage employees' payroll but also to transfer their pay to the employee's bank account.

### 2.4.2 Disadvantages of network

Although there are many advantages to a network (mentioned above), there are some disadvantages. Below are some disadvantages of a network:

- **Virus and malware** - Networks make sharing information between network users easy. Unfortunately, this also means that viruses and other malwares have an easier time spreading between computers on a network.

- **Vulnerabilities** - When computer are connected on the network, it will be accessible remotely, with these potential new methods of accessing the computer; it can introduce new security issues or vulnerabilities to the computer, users and the data on the network which affect the organization and the country at large.

- **Complex** - Networks are complex, and setting up and managing a network for a business or corporation requires someone with a lot of experience or certification.

- **Cost** - Setting up, managing and administering a network hardware and software incurs cost to the organization building a network.

- **Social media effect on youth and adults** - particularly youths, including students, waste their time on use of social media and unsafe Internet resources. There are also many cyber security threats such as cyberbullying, disinformation/misinformation and identity theft that you should be aware of and learn to develop safe use of the Internet.

### Practical Exercise

Make a group of three to five students and do the following:

1. From Ethio-telecom website (https://www.ethiotelecom.et/), assess the common network services it provides as an internet service providers (ISP).
2. Search for reliable information such as the one from Ethiopian Information Network Security Agency (INSA) https://www.insa.gov.et about different cyber security attacks that you may encounter as a student – such as misinformation/disinformation, cyberbullying, sex trafficking, hate crime and financial scams. Discuss in group how you can protect yourselves from such attacks.
3. Explore the functionalities and symbols used for representing network devices, preferably in an open source network mapping tools such as Dia application.

### KEY CONCEPTS

- Computer network can be used to exchange data and information, and to share resources such as hardware (e.g. storage spaces) and software.
- A virus can travel over the network and can affect our file on the computer.

## 2.5 Unit Summary

In this unit, the students are supposed to learn the basic concepts, types, advantages and disadvantages of network. You shall develop essential skills through the classroom learning, participation in activities and laboratory-based work in the school.

Computer networks help us have such services as emails, online newspapers, blogs, chats and other network services offered on the Internet. Therefore, understanding network will help students to become actors and beneficiaries of the networked society and share resources and have a faster communication. The following are the main points covered in the unit:

- A computer network is interconnection of two or more computers or any devices that able to connect over the network.
- To make a communication and interconnection between devices on a computer network, networking hardware, also known as network equipment or computer networking devices, which are electronic devices, are required. These are end devices, intermediate devices, connection medium and protocol.
- End devices are the sender and the receiver which can be any devices capable of composing, sending and receiving a message.
- Intermediate devices are interconnecting devices that found between end devices, as their name indicates. Intermediary device includes network cards, routers or network switches, modems and Ethernet repeaters.
- Network interface card (NIC) is used to plug a UTP cable to the computer. It has wireless variety which allows a computer to connect to the network wirelessly.
- Repeaters, as the name indicates, repeat and boost the signal. It accepts weak signal on one port, illuminates the noise that makes signal week, regenerates signals and resends the boosted, cleared signal over the other port. It has an analog version, which is also called Amplifier. Amplifier amplifies not only the signal but also the noise and sends it again.
- Switch is more intelligent device than repeater because after learning the network, it forwards packet to the destined port or a device connected to the port only.
- A router is a device that connects different types of network and more intelligence than switch.
- Router uses routing tables.
- Router selects best path through networks.
- Protocol is a common set of rules to manage communication (packet transmission) through a network.
- Connection media used in networks are wired (guided) and wireless (unguided) media.
- UTP is the most common wired medium used in local area network.
- Wireless media can be radio waves, microwaves and infra-red waves.
- Based on size, network can be classified as personalized area network (PAN), local area network (LAN), metropolitan area network (MAN) and wide area network (WAN).
- PAN is the smallest area network which can be made using Bluetooth network.
- LAN is larger than PAN and smaller than MAN in number of computers and geographical coverage. LAN can be a small office, one campus or school, network.
- MAN convers area of a city and can contain multiple LANs.
- WAN covers very large area such as the globe.
- Network topologies include bus, star, ring and mesh topologies.
- A bus topology is a cheap network where computers are connected to a common backbone cable.
- In a mesh topology, every computer in a network is connected to each other independently. Mesh topology needs more cable and more ports on the computer.
- In star topology, all computers are connected separately to a central device, which can be a switch. A failure of the central device results in a failure of the entire network.
- Ring topology looks like finger ring that connects devices in such a way that each device is connected to other two adjacent devices. Failure of one node in ring topology network will affect the whole network.
- Peer-to-peer and client-server networks are based on resource access and sharing.
- In peer-to-peer network, resources are distributed among peers and each peer can be a server and client at the same time.
- In client server, resources to be shared over the network are administered centrally and there is a dedicated server which provides resources called servers and there is also a dedicated client which requests a resource from the server.
- Network is advantageous in increasing communication speed, sharing data, sharing hardware, sharing software and getting entertainment.
- Network also disadvantageous in security concerns and incurring cost for setting up and administration of network, hardware, software and the expertise.

## 2.6 Unit Review Exercise

### Part I: Write whether the following statements are true or false

1. Each individual client computer is responsible for the security of the resource in the client and server networks.
2. Software cannot be shared over the network.
3. A MAN is usually within the boundary of a private building.
4. In ring topology, each node is directly connected to many other adjacent neighbors.
5. WAN has fewer nodes than LAN.

### Part II: Choose the correct answer among the alternatives

1. Which one of the following is different from others?
   - A. Star
   - B. Ring
   - C. Bus
   - D. Peer-to-peer

2. The term WAN stands for
   - A. Wide Area Net
   - B. Wide Access Network
   - C. Wide Area Network
   - D. Wide Access Net

3. If a given two networks use separate and different protocols, which one of the following devices can be used to link them?
   - A. Repeater
   - B. Router
   - C. Switch
   - D. None of the above

4. Bluetooth is an example of
   - A. Personal area network
   - B. Local area network
   - C. Metropolitan area network
   - D. Wide area network

5. A ____ typically connects personal computers within a very limited geographical area, usually within a single building.
   - A. LAN
   - B. WAN
   - C. MAN
   - D. TAN

6. Physical or logical arrangement of network is called
   - A. topology
   - B. routing
   - C. networking
   - D. None of the above

7. Which of the following topologies requires a central controller such as switch?
   - A. Star
   - B. Mesh
   - C. Ring
   - D. Bus

8. ____________ topology requires more cables than others?
   - A. Star
   - B. Mesh
   - C. Ring
   - D. Bus

9. The network system that spans states, countries or the whole world is
   - A. LAN
   - B. WAN
   - C. MAN
   - D. None of the above

10. Network system within a building or campus is________
    - A. LAN
    - B. WAN
    - C. MAN
    - D. None of the above

11. A network that spans across a globe is
    - A. World area network
    - B. Local area network
    - C. Personalized area network
    - D. None of the above

12. In ___________ topology, if a node fails, the whole network cannot function
    - A. ring
    - B. bus
    - C. mesh
    - D. star

13. Which one of the following interconnecting devices accepts a weak signal, boosts it to its original strength and forwards to the next segment of a network?
    - A. Switch
    - B. Router
    - C. Repeater
    - D. Client

14. __________ is used to connect one or more LANs
    - A. Server
    - B. Router
    - C. Repeater
    - D. Client

15. _____________ type of network is created when two or more mobile devices are connected by a Bluetooth
    - A. LAN
    - B. MAN
    - C. Internet
    - D. PAN

### Part III: Fill in the blanks

1. Network is a group of two or more computer systems sharing ___________.
2. In client-server model users are called ___________.
3. Based on size of the network, network is classified into ___________, ___________, ___________ and ___________.
4. ___________ is a common rule between communicating devices.
5. The best example of wide area network is ___________.

### Part IV: Match the following items in column A with column B

**Column A:**
1. Interconnection of two or more computers or other devices
2. Set of rules to guide communications
3. E-Learning
4. Sender computer
5. A dedicated link that every computer has to the rest of the nodes
6. Uses switch as central device
7. Increased vulnerability
8. Hosts and gives networked resources
9. Microwave
10. Uses light system to transmit signal

**Column B:**
A. Fiber Optic Cable
B. Used to draw pictures
C. Client
D. Originator of messages
E. Server
F. Disadvantage of network
G. Network
H. Mesh topology
I. Application of a network
J. UTP cable
K. Protocols
L. Star topology
M. Wireless medium

### Part V: Provide clear and precise responses to the following

1. What is a network?
2. State the criteria used to categorize networks.
3. What are wired and wireless media?
4. What is a network topology?
5. List at least three applications of a network.
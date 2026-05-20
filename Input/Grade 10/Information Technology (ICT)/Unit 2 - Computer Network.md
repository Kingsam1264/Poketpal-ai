# Unit 2: Computer Network

## UNIT OUTCOMES

At the end of this unit, learners will be able to:
- Explain transmission media.
- Describe telecommunications network.
- Explain mobile and cellular communications.
- Analyze satellite networks.
- Discuss data communication.
- Conceptualize the use of Internet protocols (IP).

## 2.1 Unit Overview

As it was defined and discussed in grade 9, unit 2, the computer network is the connection of two or more computers or communication devices connected by transmission media and guided by a set of rules for communication purposes that allow users to communicate with each other and share applications and data. The fundamental components of a network are devices, media, messages and protocols.

**Figure 2.1: Representation of network in school**  
The image shows a school network diagram with wireless devices, clients (computers), a printer, and a server, all connected to the INTERNET. The diagram illustrates how various network components interact within a school environment.

In this unit, you are going to learn about network media, telecommunications networks, mobile communications, cellular networks, satellite networks, data communications and internet protocol.

## 2.2 Network Media (Transmission Media)

### Brainstorming

1. What do you think is a transmission medium?
2. How are data transmitted in modern networks?

For data to be transmitted from one location to another, a physical pathway or medium must be used. These pathways are called transmission media and can be either physical or wireless. The physical transmission use wire, cable, and other tangible materials; wireless transmission media send communications signals through the air or space. The physical transmission media are generally referred to as cable media (example, twisted pair wire, coaxial cable, and fiber optic cable). Wireless media include cellular radio, microwave transmission, satellite transmission, radio and infrared.

Modern networks primarily use three types of media to interconnect devices and to provide the pathway over which data can be transmitted. These media are:
- Copper cables
- Glass or plastic fibers (fiber optic cable)
- Wireless transmission

**Figure 2.2: Network media**  
The image displays three types of network media side by side: Copper Wire, Fiber Optics, and Wireless representations, showing the different physical forms of transmission media.

The signal encoding that must occur for the message to be transmitted is different for each media type. On metallic wires, the data is encoded into electrical impulses that match specific patterns. Fiber optic transmissions rely on pulses of light, within either infrared or visible light ranges or in wireless transmission, and patterns of electromagnetic waves depict the various bit values. Different types of network media have different features and benefits. All network media do not have the same characteristics and are appropriate for the same.

### Activity

Discuss the following items in a group:
1. What categories of transmission media could you use to communicate in school and local environment?
2. Analyze characteristics of the signal in each media.
3. Bring some physical media to the class and discuss how they are arranged to be used in the network.
4. Explain factors to be considered while choosing a transmission medium.

### KEY CONCEPTS

Signal is an electric or electromagnetic form of data that passes over transmission media. A wire is a long thin piece of metal that is used to fasten things or to carry electric current.

## Categories of Network Media (Transmission Media)

The transmission medium can be divided into two broad categories: wired or guided media and wireless or unguided media, as shown in Figure 2.3.

**Figure 2.3: Classification of transmission media**  
The image shows a tree diagram classifying transmission media into two main branches: Guided (Wired) media containing Twisted-Pair, Coaxial Cable, and Fiber-Optic; and Unguided (Wireless) media containing Radio Wave, Microwave, and Infrared Wave.

## 2.2.1 Guided (Wired) Media

Guided media are those that provide a conduit from one device to another. These include twisted-pair cable, coaxial cable and fiber-optic cable. A signal traveling along any of these media is directed and contained by the physical limits of the medium. Twisted-pair and coaxial cables use metallic (copper) conductors that accept and transport signals in the form of electric current. Optical fiber is a cable that accepts and transports signals in the form of light.

### Twisted-pair Cable

A twisted pair consists of two conductors (normally copper), each with its plastic insulation, twisted together as shown in Figure 2.4. One of the wires is used to carry signals to the receiver and the other is used only as a ground reference. In addition to the signal sent by the sender on one of the wires, interference (noise) and crosstalk may affect both wires and create unwanted signals.

**Figure 2.4: Twisted-pair cable**  
The image shows a twisted-pair cable with two copper conductors, each with plastic insulation, twisted together. It illustrates how the twisting helps balance interference.

If the two wires are parallel, the effect of these unwanted signals is not the same on both wires because they are at different locations relative to the noise or crosstalk sources (for example, one is closer and the other is farther). This results in a difference at the receiver. By twisting the pairs, a balance is maintained. For example, suppose in one twist, one wire is closer to the noise source and the other is farther; in the next twist, the reverse is true. The twisting makes it probable that both wires are equally affected by external influences (noise or crosstalk). Fundamentally, twisted pairs are classified as unshielded twisted-pair (UTP) and shielded twisted-pair.

### Unshielded Twisted-Pair (UTP)

Unshielded twisted-pair (UTP) is the most common form of network cable. This cable format is used for the Ethernet wiring standards which are managed by the Institute of Electrical and Electronics Engineers (IEEE). These wiring standards are referred by code. The Ethernet standards include specifications of cable configurations and the types of connectors used to plug cables into devices.

**Figure 2.5: UTP cable**  
The image shows the structure of a UTP cable with color-coded twisted pair wires, plastic insulation, outer jacket, and labels indicating protection from physical damage and interference.

What we conventionally know as a network cable is an 802.3 specified cable for Ethernet networks. This type of cable, which is shown in Figure 2.5, can block interference and does not depend on a physical shield for this purpose. In modern networks, UTP cables are considered in different categories starting from cat1 to cat7 and so on.

### UTP Cable Connectors

The most common UTP connector is RJ45. RJ stands for registered jack, implying that the connector follows a standard borrowed from the telephone industry, as shown in Figure 2.6. The RJ45 is a keyed connector, meaning the connector can be inserted in only one way. UTP cabling, terminated with RJ45 connectors, is a common copper-based medium for interconnecting network devices such as computers with intermediate devices like routers and network switches.

**Figure 2.6: UTP connector**  
The image shows a UTP cable with an RJ-45 connector attached, displaying the standard eight-pin connector used for Ethernet networking.

UTP cables are wired according to different wiring conventions. The individual wires in the cable have to be connected in different orders to different sets of pins in the RJ45 connector. Ethernet straight-through and Ethernet crossover are the main cable types that are obtained by using specific wiring conventions.

**Figure 2.7: Ethernet cable color coding**  
The image shows two types of Ethernet cables: a) Cross-over Cable and b) Straight-through Cable, with color-coded wire arrangements visible in both, demonstrating the different wiring patterns for each type.

The straight-through is the most common type and is used to connect computers to hubs or switches (connect different network devices). They are most likely what you will find when you go to your local computer laboratory. Crossover Ethernet cable is more commonly used to connect a computer to a computer (connect similar network devices) and may be a little harder to find since they are not used nearly as much as a straight-through Ethernet cable.

When electromagnetic signals are conducted on copper wires that are nearby (such as inside a cable), some electromagnetic interference occurs. This interference is called crosstalk. Twisting two wires together as a pair minimizes such interference and also provides some protection against interference from outside sources. Unshielded twisted pair is subject to external electromagnetic interference, including interference from nearby twisted pairs and noise generated in the environment. In an environment with several sources of potential interference (for example, electric motors, wireless devices and radio frequency (RF) transmitters), a shielded twisted-pair (STP) may be a preferred solution.

### Practical Exercise 2.1

Do the following exercises in a group:
1. Practice color code arrangements of straight-through and cross-over cables.
2. Practice UTP cabling in your school laboratory.
3. Connect any two computers using UTP cable cat5, cat 6 or cat 7.

### Shielded Twisted-Pair (STP)

This type of cable, as shown in Figure 2.8, consists of a special jacket to block external interference. It is used in fast-data-rate Ethernet and voice and data channels of telephone lines.

**Figure 2.8: Shield twisted-pair**  
The image shows a shielded twisted-pair cable with twisted pair wires, individual metal shielding around pairs, overall metal shielding, and an outer jacket.

Shielded twisted-pair (STP) cable combines the techniques of cancellation and twisting of wires with shielding. Each pair of wires is wrapped in metallic foil to further shield the wires from noise. The four pairs of wires are then wrapped in an overall metallic braid or foil. STP reduces electrical noise from the cable (crosstalk) and outside the cable (EMI and RFI).

### Activity

Discuss the following points in a group:
1. Discuss the term signal.
2. Compare and contrast unshielded twisted-pair (UTP) and shield twisted-pair.

### KEY CONCEPTS

RJ45 stands for Registered Jack 45. Electromagnetic (EM) waves are waves that are created as a result of vibrations between electric and magnetic fields. In other words, EM waves are composed of oscillating magnetic and electric fields. RF is short for radiofrequency. RF is any frequency within the electromagnetic spectrum which is associated with radio wave propagation. When an RF current is supplied to an antenna, an electromagnetic field is created and then able to travel or propagate through space.

### Coaxial Cable

Coaxial cable (or coax), as shown in Figure 2.9, carries signals of higher frequency ranges than those in twisted pair cable in part because the two media are constructed quite differently. Instead of having two wires, coax has a central core conductor of solid or stranded wire (usually copper) enclosed in an insulating sheath which is, in turn, encased in an outer conductor of metal foil, a combination of the two. The outer metallic wrapping serves both as a shield against noise and the second conductor which completes the circuit. This outer conductor is also enclosed in an insulating sheath and the whole cable is protected by a plastic jacket.

**Figure 2.9: Coaxial cable**  
The image shows the cross-section of a coaxial cable with inner copper wire, filler, braided metal shield, and plastic outer jacket.

Coaxial cables are available in a variety of thicknesses, with two primary physical types: thick coaxial cable and thin coaxial cable, as shown in Figure 2.10. Thick coaxial cable ranges in size from approximately 6 to 18mm (1/4 to 3/4 inch) in diameter.

**Figure 2.10: Thick and thin coaxial cables**  
The image compares thick coaxial cable (10mm), thin coaxial cable (4mm), with a pencil (8mm) as reference size.

The thin coaxial cable is approximately 4mm (less than 1/4 inch) in diameter. Compared to a thick coaxial cable which typically carries broadband signals, a thin coaxial cable has limited noise isolation and typically carries baseband signals. Thick coaxial cable has better noise immunity and is generally used for the transmission of analog data such as single or multiple video channels.

### Coaxial Cable Connectors

To connect coaxial cables to devices, we need coaxial connectors. The most common type of connector used today is the Bayonet Neill-Concelman (BNC) connector. Figure 2.11 shows three popular types of these connectors: the BNC connector, the BNC T connector, and the BNC terminator.

**Figure 2.11: BNC connector**  
The image shows three BNC connectors: a standard BNC connector, a BNC T connector for branching connections, and a BNC 50-W terminator.

### Practical Exercise

Answer the following exercises in a group and demonstrate them to class:
1. Bring some of the coaxial cable and its connector to class and demonstrate their connection.
2. Telecommunications office provides Internet service at home for Individuals' use; explain the technologies used to provide Internet connection.

### KEY CONCEPTS

Ethernet is the traditional technology for connecting devices in a wired local area network (LAN) or wide area network (WAN). Unshielded twisted-pair (UTP) is a ubiquitous type of copper cabling used in telephone wiring and local area networks (LANs). There are different types of UTP cables - identified with the prefix CAT, as in category - each supporting a different amount of bandwidth. Coax, short for coaxial, is a type of cable used to transmit data, the internet, video and voice communications. Electromagnetic is used to describe the electrical and magnetic forces or effects produced by an electric current.

### Fiber-optic Cable

Fiber-optic cabling uses either glass or plastic fibers to guide light impulses, Figure 2.12, from source to destination. The bits are encoded on the fiber as light impulses. Fiber optic cabling consists of a center glass core surrounded by several layers of protective materials. It transmits light rather than electronic signals eliminating the problem of electrical interference. This makes it ideal for certain environments that contain a large amount of electrical interference. It has also made it the standard for connecting networks between buildings due to its immunity to the effects of moisture and lighting.

**Figure 2.12: Fiber-optic cable**  
The image shows a fiber-optic cable with a glass or plastic inner core, cladding, protective buffer, strength member, and outer jacket.

Fiber optic cable can transmit signals over much longer distances than coaxial and twisted pairs. It can also carry information at vastly greater speeds. This capacity broadens communication possibilities to include services such as video conferencing and interactive services. There are two common types of fiber cable: single mode and multimode cables. Multimode cable has a larger diameter; however, both cables provide high bandwidth at high speeds. The single mode cable can provide more distance, but it is more expensive.

### Fiber-optic Cable Connectors

There are three types of connectors for fiber-optic cables, as shown in Figure 2.13. These are subscriber channel (SC), straight-tip (ST) and Mechanical Transfer Registered Jack (MT-RJ) connectors. The subscriber channel (SC) connector is used for cable TV. It uses a push/pull locking system. The straight-tip (ST) connector is used for connecting cables to networking devices. It uses a bayonet locking system and is more reliable than SC. MT-RJ is a connector that is the same size as RJ45.

**Figure 2.13: Fiber-optic cable connectors**  
The image shows three fiber-optic connectors: SC Connector (push/pull), ST Connector (bayonet), and MT-RJ Connector (similar size to RJ45).

### Activity 2.3

Do the following activities in a group:
1. If an internet service provider (ISP) needs to connect offices from Addis Ababa to Bahir Dar, which types of cable do you think are relevant to this connection?
2. Explain the importance of the protection of these cables from damage.
3. Suppose you need to connect 20 computers to a local area network (LAN); which cable do you think is relevant? (Why?)
4. Explain the advantages and disadvantages of fiber optics cable over other copper cables.

### Practical Exercise 2.3

Do the following activity in a group:
- Refer to Figure 2.14 and visit the installation of fiber-optics and twisted-pair cables in your school and present what observed to your classmates.

**Figure 2.14: Fiber-optic backbone with CAT 6 twisted pair running to the workstations**  
The image shows a network diagram with a fiber-optic cable backbone connecting switches, and CAT 6 twisted-pair cables running from switches to workstations. The diagram illustrates how fiber-optic provides high-speed backbone connectivity while CAT 6 cables connect end devices.

## 2.2.2 Unguided (Wireless) Media

Unguided media transport electromagnetic waves without using a physical conductor. This type of communication is often referred to as wireless communication. Signals are normally broadcast through free space and thus are available to anyone who has a device capable of receiving them. Figure 2.15 shows categories of wireless transmission.

**Figure 2.15: Categories of wireless transmission waves**  
The image shows a diagram categorizing wireless transmission into Radio Wave, Microwave, and Infrared.

Unguided signals can travel from a given source to its destination in several ways: ground propagation, sky propagation and line-of-sight propagation. Figure 2.16 shows propagation methods.

In-ground propagation, radio waves travel through the lowest portion of the atmosphere, hugging the earth. These low-frequency signals emanate in all directions from the transmitting antenna and follow the curvature of the planet. Distance depends on the amount of power in the signal. The greater the power, the greater the distance will be.

**Figure 2.16: Propagation methods**  
The image illustrates three propagation methods: Ground Propagation (below 2MHz) where waves hug the earth, Sky propagation (2-30MHz) where waves reflect off the ionosphere, and Line-of-sight propagation (above 30MHz) with direct antenna-to-antenna transmission.

In sky propagation, higher-frequency radio waves radiate upward into the ionosphere (the layer of the atmosphere where particles exist as ions) where they are reflected on earth. This type of transmission allows for greater distances with lower output power. In line-of-sight propagation, very high-frequency signals are transmitted in straight lines directly from antenna to antenna. Antennas must be directional, facing each other and either tall enough or close enough together not to be affected by the curvature of the earth. Line-of-sight propagation is tricky because radio transmissions cannot be completely focused.

### a. Radio Waves

Although there is no clear-cut demarcation between radio waves and microwaves, electromagnetic waves ranging in frequencies between 3kHz and 1GHz are normally called radio waves; waves ranging in frequencies between 1 and 300GHz are called microwaves. However, the behavior of the waves, rather than the frequencies, is a better criterion for classification.

Radio waves, for most parts, are omnidirectional. When an antenna transmits radio waves, they are propagated in all directions. This means that the sending and receiving antennas do not have to be aligned. A sending antenna sends waves that can be received by any receiving antenna. The omnidirectional property has a disadvantage too. The radio waves transmitted by one antenna are susceptible to interference by another antenna that may send signals using the same frequency or band. Radio waves, particularly those that propagate in the sky mode, can travel long distances. This makes radio waves a good candidate for long-distance broadcasting such as AM radio.

### Omnidirectional Antenna

Radio waves use omnidirectional antennas that send out signals in all directions. Based on the wavelength, strength and purpose of transmission, we can have several types of antennas. Figure 2.17 shows an omnidirectional antenna.

**Figure 2.17: Omnidirectional antenna**  
The image displays a typical omnidirectional antenna radiating signals equally in all horizontal directions.

The omnidirectional characteristics of radio waves make them useful for multicasting, in which there is one sender but many receivers. AM and FM radio, television, maritime radio, cordless phones and paging are examples of multicasting.

### b. Microwaves

A microwave is a line-of-sight wireless communication technology that uses high-frequency beams of radio waves to provide high-speed wireless connections that can send and receive voice, video and data information. Microwaves are unidirectional. When an antenna transmits microwaves, it can be narrowly focused. This means that the sending and the receiving antennas need to be aligned. The unidirectional property has an obvious advantage. A pair of antennas can be aligned without interfering with another pair of aligned antennas.

### Activity

Discuss the following items in a group:
1. Explain the term unguided media.
2. Describe the fundamental characteristics of microwave propagation.
3. Summarize the advantages of microwave technology in today's communication system.
4. Compare and contrast omnidirectional and unidirectional antennas.

### Unidirectional Antenna

Microwaves need unidirectional antennas that send out signals in one direction. Two types of antennas are used for microwave communications: parabolic dish and horn.

**Figure 2.18: Unidirectional antenna**  
The image shows two types of unidirectional antennas: a) Parabolic dish antenna with a curved reflector focusing waves to a focal point, and b) Horn antenna resembling a scoop that directs signals in a narrow beam.

A parabolic dish antenna is based on the geometry of the parabola where every line is parallel to the line of symmetry (line of sight). Figure 2.18 portrays the curve at angles such that all the lines intersect in a common point called the focus. The parabolic dish works as a funnel, catching a wide range of waves and directing them to a common point. More of the signal is recovered in this way than a single-point receiver.

**Figure 2.19: Microwave antenna**  
The image shows microwave communication with relay stations positioned in line-of-sight (about 30 miles apart) on earth, transmitting signals between main microwave stations.

In microwave communications, line-of-sight devices must be placed in relatively high locations. Information is converted to a microwave signal, sent through the air to a receiver, and recovered. A horn antenna looks like a gigantic scoop. Outgoing transmissions are broadcast up a stem (resembling a handle) and deflected outward in a series of narrow parallel beams by the curved head. Received transmissions are collected by the scooped shape of the horn, like the parabolic dish, and are deflected down into the receiver.

### Applications of Microwave Technologies

Microwaves, due to their unidirectional properties, are very useful when unicast (one-to-one) communication is needed between the sender and the receiver. They are used in cellular phones, satellite networks and wireless LANs (which will be discussed in the next sections of this unit).

### c. Infrared Waves

Infrared, which is sometimes called infrared light, is electromagnetic radiation with wavelengths longer than those of visible lights. It is therefore invisible to the human eye. For example, you use infrared light waves to change channels on your TV.

**Figure 2.20: Remote control**  
The image shows a TV remote control, which is a common example of an infrared wave application for short-range communication.

### KEY CONCEPTS

Electromagnetic (EM) waves are waves that are created as a result of vibrations between an electric field and a magnetic field. Electromagnetic waves are formed when an electric field comes in contact with a magnetic field. They are, hence, known as electromagnetic waves. Omnidirectional means being in or involving all directions, especially receiving or sending radio waves equally well in all directions. Omnidirectional antenna is a wireless transmitting or receiving antenna that radiates or intercepts radio-frequency (RF) electromagnetic fields equally well in all horizontal directions in a flat, two-dimensional (2D) geometric plane. Radio waves are types of electromagnetic radiation with the longest wavelengths in the electromagnetic spectrum, typically with frequencies of less or equal to 300 gigahertz (GHz). They are used in standard broadcast radio and television, shortwave radio, navigation and air-traffic control, cellular telephony and even remote-controlled toys.

## 2.3 Telecommunications Network

### Brainstorming

1. Can you describe the term telecommunication networks?
2. Can you mention the importance of telecommunication?
3. What are services offered by a telecommunication system?

### 2.3.1 Telecommunications Concepts

The term telecommunications generally refer to all types of long-distance communication that use common carriers, telephone, radio, and television. It is the exchange of information in any form (voice, data, text, images, audio, and video) over networks. Data communications is a subset of telecommunications and is achieved through the use of telecommunication technologies.

In modern organizations, communications technologies are integrated. Businesses are finding electronic communications essential for minimizing time and distance limitations. Telecommunications plays a special role when customers, suppliers, vendors, and regulators are part of a multinational organization in a world that is continuously awake and doing business somewhere 24 hours a day, 7 days a week ("24/7"). Figure 2.21 represents a model of an integrated computer and telecommunications system common in today's business environment.

**Figure 2.21: General telecom network components**  
The image shows a telecommunications system diagram with components labeled: 1) Hardware, 2) Communications media, 3) Communications networks, 4) Communications processors, 5) Communications software, connecting PCs, NCs, and other terminals to computers.

### Telecommunications system

A telecommunications system is a collection of compatible hardware and software arranged to communicate information from one location to another. These systems can transmit text, data, graphics, voice, documents, or video information. A typical telecommunications system is shown in Figure 2.22. Such systems have two sides: the transmitter and the receiver. The major components are:

1. Hardware—all types of computers and communications processors (such as modems or small computers dedicated solely to communications).
2. Communications media—the physical media through which electronic signals are transferred; includes both wireline and wireless media.
3. Communications networks—the linkages among computers and communications devices.
4. Communications processors—devices that perform specialized data communication functions; includes front-end processors, controllers, multiplexors and modems.
5. Communications software—software that controls the telecommunications system and the entire transmission process.
6. Data communications providers—regulated utilities or private firms that provide data communications services.
7. Communications protocols—the rules for transferring information across the system.
8. Communications applications—electronic data interchange (EDI), teleconferencing, videoconferencing, e-mail, facsimile, electronic funds transfer, and others.

**Figure 2.22: A modem converts digital to analog signals and vice versa**  
The image shows a modem connecting a digital computer to an analog telephone network, illustrating modulation (digital to analog) and demodulation (analog to digital) processes between Company A and Company B.

To transmit and receive information, a telecommunications system must perform the following separate functions that are transparent to the user:
- Transmit information.
- Establish the interface between the sender and the receiver.
- Route messages along the most efficient paths.
- Process the information to ensure that the right message gets to the right receiver.
- Check the message for errors and rearrange the format if necessary.
- Convert messages from one speed to that of another communications line or from one format to another.
- Control the flow of information by routing messages, polling receivers, and maintaining information about the network.
- Secure the information at all times.

### Electronic Signals

Telecommunications media can carry two basic types of signals, analog and digital. Analog signals are continuous waves that "carry" information by altering the amplitude and frequency of the waves. For example, sound is analog and travels to our ears in the form of waves—the greater the height (amplitude) of the waves, the louder the sound; the more closely packed the waves (higher frequency), the higher the pitch. Radio, telephones, and recording equipment historically transmitted and received analog signals, but they are rapidly changing to digital technology.

Digital signals are discrete on-off pulses that convey information in terms of 1's and 0's, just like the central processing unit in computers. Digital signals have several advantages over analog signals. First, digital signals tend to be less affected by interference or "noise." Noise (e.g., "static") can seriously alter the information carrying characteristics of analog signals, whereas it is generally easier, in spite of noise, to distinguish between an "on" and an "off." Consequently, digital signals can be repeatedly strengthened over long distances, minimizing the effect of any noise. Second, because computer-based systems process digitally, digital communications among computers require no conversion from digital to analog to digital.

Communications processors are hardware devices that support data transmission and reception across a telecommunications system. These devices include modems, multiplexers, front-end processors, and concentrators. A modem is a communications device that converts a computer's digital signals to analog signals before they are transmitted over standard telephone lines. The public telephone system (called POTS for "Plain Old Telephone Service") was designed as an analog network to carry voice signals or sounds in an analog wave format. In order for this type of circuit to carry digital information, that information must be converted into an analog wave pattern. The conversion from digital to analog is called modulation, and the reverse is demodulation. The device that performs these two processes is called a modem; a contraction of the terms modulate/demodulate. Modems are always used in pairs.

### 2.3.2 The Importance of Telecommunications

Advances in telecommunications technology allow us to communicate rapidly and learn at distance. Education sectors can take advantage of this technology and communicate almost anywhere in the world. In the business sector, telecommunications also reduce the amount of time needed to transmit information that can drive and conclude business actions.

**Figure 2.23: Telecommunications in business**  
The image shows telecommunications applications in business-to-business collaboration and e-commerce markets, illustrating how telecom enables business operations.

The range of telecommunications applications is broad and includes telephony and video conferencing, facsimile, broadcast and interactive television, instant messaging, e-mail, distributed collaboration, a host of Web and Internet-based communication, and data transmission.

In general, telecommunications create an impact on the everyday activities of people all over the world. Through telecommunications, people can develop solutions and provide support to causes and problems across the world, hence, making it a closer and safer place to live in. For example, to take advantage of telecommunications, Ethio-telecom is installing 4G LTE advanced across all regions.

**Figure 2.24: 4G LTE**  
The image displays "4G LTE ADVANCED ethiotelecom" branding with the slogan "Bringing new possibilities Faster Speed!" showing modern cellular technology deployment.

### Activity

Do the following activities:
1. Explain the term telecommunications and its system components. (Refer to figures 2.21 and 2.22).
2. Currently, what are the fundamental effects of telecommunications systems in our daily life?
3. Define and discuss the terms modem and multiplexer in telecommunications systems.
4. For what purposes do students may use telecommunications technologies in school/local villages? What could be the impact of these technologies on their daily lives?
5. Discuss the implications of telecommunications system in education.

### KEY CONCEPTS

The term telecommunications refers to all types of long-distance communication that use common carriers, telephone, radio and television for the exchange of information in any form (voice, data, text, images audio and video) over networks. Telecommunications system is a collection of compatible hardware and software arranged to communicate information from one location to another. Telecommunications network components are terminals (inputs used to transmit and receive data), telecom processors (devices that perform control and provide support function), telecom channels (media for transmission of information), various computer and telecom control software (programs that control telecom activities).

## 2.4 Mobile Communications

### Brainstorming

1. Can you describe what is meant by mobile communication?
2. Where and when do you think Bluetooth technology is so important?
3. What is wireless LAN?

Mobile communication is the use of technology that allows us to communicate with others in different locations without the use of any physical connection (wires or cables). Mobile communication saves time and effort and makes our life easier. The following sections discuss basic mobile communications concepts.

### 2.4.1 A Bluetooth Network

Bluetooth technology is a short-range wireless communications technology to replace the cables connecting electronic devices, allowing a person to have a phone conversation via a headset. Figure 2.25 shows a Bluetooth headset.

**Figure 2.25: Example of a Bluetooth headset**  
The image shows a wireless Bluetooth headset device, demonstrating short-range wireless communication technology.

The Bluetooth Radio Frequency transceiver operates in the unlicensed Industrial, Scientific, and Medical (ISM) band centered at 2.4 gigahertz (the same range of frequencies used by microwaves and Wi-Fi). Every Bluetooth-enabled device in the system can establish a connection via pairing and can communicate with each other. Figure 2.26 shows a Bluetooth connection.

**Figure 2.26: Bluetooth connection**  
The image shows multiple devices connected via Bluetooth: a headset, scanner, cellphone, and keyboard, all wirelessly paired to a central device.

### Activity

Answer the following activities in a small group:
1. Analyze the advantages of Bluetooth over other wireless technologies.
2. Use your mobile phones and share at least two messages with your nearby friends via Bluetooth.
3. Discuss the basic features of Bluetooth.

### 2.4.2 Wireless Local Area Network (WLAN)

With the success of wired local area networks (LANs), the local computing market is moving toward wireless LAN (WLAN) with the same speed as the current wired LAN. It is a communication system established through the use of radio frequency (RF) technology that can function either as an extension to an existing LAN or as an alternative for a wired LAN. There is a need for an access point (AP) that bridges wireless LAN traffic into the wired LAN. Figure 2.27 shows a wireless LAN setup.

**Figure 2.27: Wireless local area network (WLAN)**  
The image shows a WLAN diagram with a wired network connected to a router, which connects to an Access Point that wirelessly connects to client devices.

Wireless local area networks are flexible data communication systems that can be used for applications in which mobility is required. This gives users the ability to move around within a local coverage area and still be connected to the network. Currently, WLANs can provide data rates up to 11Mbps, but the industry is making a move toward high-speed WLANs. The high speed makes WLANs a promising technology for the future data communications market. The International Enterprise for Electronics Engineering (IEEE) 802.11 committee is responsible for WLAN standards. Most modern WLANs are based on IEEE 802.11 standards and marketed under the Wi-Fi brand name.

**Figure 2.28: APs**  
The image shows wireless cells with Access Points (APs) on channels 1 and 6, connected to a LAN backbone, with wireless clients accessing the network through these APs.

The access point (AP), can also act as a repeater for wireless nodes, effectively doubling the maximum possible distance between nodes. To service larger areas, multiple APs may be installed with a 10-15% overlap. Figure 2.28 above shows the access points overlapping.

### Activity

Activity 2.8 - Answer the following activities in a group:
1. Discuss the fundamental components of WLAN (Refer to Figure 2.27).
2. Analyze wireless LAN and report to the class based on:
   - Its implication to learning in school.
   - Advantages and disadvantages.
   - Similarities and differences with wired local area network.
3. Visit WLAN (Wi-Fi) at your school or local environment and report its implication to business to your class.
4. Summarize the role of access points in WLAN.
5. Describe the advantages of overlapping the access points?

### KEY CONCEPTS

Mobility is the ability to move freely. Bluetooth is a wireless technology that uses a radio frequency to share data over a short distance, eliminating the need for wires. You can use Bluetooth on your mobile device to share documents or to connect with other Bluetooth-enabled devices. Electromagnetic fields, radio waves, microwaves and wireless signals are referred to as radio frequency (RF). Wireless local area networking, also known as WLAN or wireless LAN, is a term used to refer to wireless digital signals to connect computers and other devices.

## 2.5 Cellular Networks

### Brainstorming

1. How is your handheld device mobile?
2. What are the services provided by cellular systems?
3. In Ethiopia, which organization(s) provide(s) cellular system services?

A cellular network or mobile network is a radio network distributed over land areas called cells, each served by at least one fixed-location transceiver, which is known as a cell site or base station. A cellular network is designed to provide communications between two moving units (called mobile stations (MSs)), or between one mobile unit and one stationary unit (often called a land unit). A service provider must be able to locate and track a caller, assign a channel to the call and transfer the channel from the base station to the base station as the caller moves out of range. To make this tracking possible, each cellular service area is divided into small regions called cells. Each cell contains an antenna and is controlled by a solar or AC-powered network station called the base station.

**Figure 2.29: Cellular system**  
The image shows a cellular network diagram with mobile switching center (MSC) connecting to base stations (BS) and mobile stations (MS), with connection to the public switched telephone network (PSTN).

Each base station is controlled by a switching office called a mobile switching center (MSC). The MSC coordinates communication between all the base stations and the telephone central office. It is a computerized center that is responsible for connecting calls, recording call information and billing.

### Activity

Discuss the following activities in a group:
1. Describe the role of the cellular base station around you or at school.
2. Explain how your hand-held device (mobile) accesses the base stations.
3. Visit any Ethio-telecom office found in your local area and summarize the services of a cellular system.
4. Analyze how cell sizes are different from one another in the cellular network.

### KEY CONCEPTS

Cellular refers to a network technology that facilitates mobile device communication over areas comprised of cells and transceivers, which are also known as base stations or cell sites. In a cellular network, the most widely used mobile transceivers are mobile phones, or cell phones. Base station is a fixed transceiver that is the main communication point for one or more wireless mobile client devices. A base station serves as a central connection point for a wireless device to communicate. Cell is a small geographic unit in a cellular network.

### Generation of Cellular System

The cellular communication networks are known by their numeric generation such as 1G, 2G, 3G and 4G designations. We are currently in the fourth generation with 5G emerging.

### Activity

Discuss the following items and present them to the class:
1. Discuss the basic characteristics and advantages of 1G, 2G and 3G cellular.
2. Explain the fundamental reason to move from one generation to another.
3. Analyze the difference between 1G, 2G, 3G, 4G and 5G.
4. Describe your handheld device to which generation it complies. Why?
5. Discuss advantages of cellular network over Wireless LAN.

### a. Fourth Generation (4G)

The fourth generation of cellular telephony is expected to be a complete evolution in wireless communications.

**Figure 2.30: 4G devices**  
The image shows various 4G-enabled devices including gaming mobile phones, Wi-Fi routers, desktop computers, 4G-enabled laptops, and 4G LTE wireless devices.

Some of the objectives defined by the 4G working group are:
- High network capacity.
- Data rate of 100Mbit/s for access in a moving car and 1Gbit/s for stationary users.
- Data rate of at least 100Mbit/s between any two points in the world.
- Smooth handoff across heterogeneous networks.
- Seamless connectivity and global roaming across multiple networks.
- High quality of service for next-generation multimedia support.
- Interoperability with existing wireless standards.

4G is also known as mobile broadband everywhere.

### 4G LTE

4G LTE (long term evolution) is a type of 4G technology. It is a mobile broadband technology that promises data transfer rates of 100Mbps. See Figure 2.24 for 4G LTE.

### b. 5G

5G is the 5th generation mobile network and it is the latest in the evolution of mobile wireless technologies. 5G goes beyond 4G LTE and is expected to bring not just faster downloads, but a much more flexible and responsive network that can adapt to enable different uses. 5G enables a new kind of network that is designed to connect everyone and everything virtually including machines, objects and devices.

**Figure 2.31: 5G network**  
The image illustrates a 5G network connecting various smart devices: autonomous cars, wearable devices, smart home IoT devices, and remote controlled devices, showing the comprehensive connectivity of 5G technology.

5G wireless technology is meant to deliver higher multi-Gbps peak data speeds, ultra-low latency, more reliability, massive network capacity, increased availability and a more uniform user experience to more users. Higher performance and improved efficiency empower new user experiences and connect new industries.

## 2.6 Satellite Networks

### Brainstorming

1. What is a satellite network?
2. Which type of network do you think that television broadcast we watch at home belongs to?

A satellite network is a combination of nodes, some of which are satellites that provide communication from one point on the earth to another point. A node in the network can be a satellite, an earth station, an end-user terminal or a telephone. The fundamental components of a satellite system are earth stations, uplink, downlink and transponder. Satellites communicate with antennas on earth by using radio waves.

**Figure 2.32: Components of satellite system**  
The image shows a satellite in orbit with earth stations on the ground, illustrating uplink (transmission from earth to satellite), transponder (satellite receiver/transmitter), and downlink (transmission from satellite to earth).

Satellite networks are like cellular networks in that they divide the planet into cells. Satellites can provide transmission capability to and from any location on Earth, no matter how remote they are. This advantage makes high-quality communication available to undeveloped parts of the world without requiring a huge investment in ground-based infrastructure.

### Activity

Answer the following activities:
1. Describe the role of the satellite system in education.
2. Explain each component of the satellite system as shown in Figure 2.32.
3. Discuss the advantages of satellite systems over other wireless technologies.
4. In Ethiopia, which part of the community do you think benefits more from the satellite system?

### 2.6.1 Orbits of Satellite

An artificial satellite needs to have an orbit, the path in which it travels around the Earth. The orbit can be equatorial, inclined or polar.

**Figure 2.33: Satellite Orbits**  
The image shows three types of satellite orbits: a) Equatorial Orbit (aligned with Earth's equator), b) Inclined Orbit (at an angle to the equator), and c) Polar Orbit (passing over Earth's poles).

### 2.6.2 Categories of Satellites

Based on the location of the orbit, satellites can be divided into three categories: geostationary Earth orbit (GEO), low-Earth-orbit (LEO) and medium-Earth-orbit (MEO).

**Figure 2.34: Satellite types and their orbit altitudes**  
The image shows a vertical diagram of satellite altitudes: GEO at 35,786km, MEO between 5,000-15,000km (between Van Allen belts), and LEO below 2,000km above Earth's surface.

There is only one orbit, at an altitude of 35,786km, for the GEO satellite. MEO satellites are located at altitudes between 5000 and 15,000km. LEO satellites are normally below an altitude of 2000km. One reason for having different orbits is the existence of two Van Allen belts. A Van Allen belt is a layer that contains charged particles. A satellite orbiting in one of these two belts would be destroyed by the energetic charged particles. The MEO orbits are located between these two belts.

### Activity 2.12

Answer the following activities in a group:
1. Discuss satellite systems in your respective group and report to class.
2. Among the categories of satellite systems, which one(s) correspond(s) to Ethiopian satellite system?
3. Visit a home dish system and report its basic installations to your class.

### KEY CONCEPTS

A satellite is basically a self-contained communication system with the ability to receive signals from Earth and to retransmit those signals back with the use of a transponder - an integrated receiver and transmitter of radio signals. Satellite networks are defined as the orientation of various elements that establish communication through various nodes from one point of the earth to another. Any satellite network can provide both types of transmission technologies, i.e. point to point as well as broadcasting connections. An orbit is a regular, repeating path that one object in space takes around another one. An object in an orbit is called a satellite. A satellite can be natural like Earth and the moon. Many planets have moons that orbit them. A satellite can also be man-made like International Space Station.

### 2.6.3 Data Communications

### Brainstorming

1. What do you mean by data communication?
2. Can you explain how data is communicated?

Data communication is a specialized subset of telecommunications that refers to the electronic collection, processing, and distribution of data, typically between computer system hardware devices. The effectiveness of a data communication system depends on four fundamental characteristics: delivery, accuracy, timeliness and jitter.

### 2.6.4 Components of Data Communication

A data communications system has five components (see Figure 2.35).

**Figure 2.35: Five components of data communication**  
The image illustrates the five components of data communication: Sender, Receiver, Transmission medium, Protocol (set of rules), and Messages being transmitted between sender and receiver.

### 2.6.5 Data Transmission Mode/Flow

Data transmission mode refers to the direction of signal flow between two linked devices. Communication between two devices can be simplex, half-duplex or full-duplex.

#### Simplex

In simplex mode, the communication is unidirectional, as on a one-way street. Only one of the two devices on a link can transmit; the other can only receive.

**Figure 2.36: Example of simplex transmission**  
The image shows a remote control and television, where the remote can only send signals and the TV can only receive, demonstrating one-way communication.

Keyboards and traditional monitors are examples of simplex devices. The keyboard can only introduce input; the monitor can only accept output. The simplex mode can use the entire capacity of the channel to send data in one direction.

#### Half-Duplex

In half-duplex mode, each station can both transmit and receive, but not at the same time. When one device is sending, the other can only receive and vice versa. The half-duplex mode is like a one-lane road with traffic allowed in both directions. When cars are traveling in one direction, other cars going the other way must wait. In half-duplex transmission, the entire capacity of a channel is taken over by whichever of the two devices is transmitting at the time.

**Figure 2.37: Half-duplex**  
The image shows two walkie-talkies, illustrating half-duplex communication where devices can transmit and receive but not simultaneously.

The half-duplex mode is used in cases where there is no need for communication in both directions at the same time; the entire capacity of the channel can be utilized for each direction.

#### Full-duplex

In full-duplex mode (also called duplex), both stations can transmit and receive simultaneously. The full-duplex mode is like a two-way street with traffic flowing in both directions at the same time. In full-duplex mode, signals going in one direction share the capacity of the link with signals going in the other direction. This sharing can occur in two ways: either the link must contain two physically separate transmission paths, one for sending and the other for receiving, or the capacity of the channel is divided between signals traveling in both directions.

**Figure 2.38: Full-duplex**  
The image shows computer network communication and mobile network communication, illustrating simultaneous two-way data transmission.

One common example of full-duplex communication is the telephone network. When two people are communicating by a telephone line, both can talk and listen at the same time. The full-duplex mode is used when communication in both directions is required all the time. The capacity of the channel, however, must be divided between the two directions.

### Activity 2.13

Do the following activities in a group:
1. Explain the fundamental characteristics of data communication.
2. Refer back to grade 9 IT textbook and explain the terms data and communication.
3. Explain the fundamental components of data communications that are illustrated in Figure 2.35.

## 2.7 Internet Protocol

### Brainstorming

1. Can you state what Internet protocol (IP) is?
2. Can you identify the IP into which your computer is connected to the network?

The Internet Protocol (IP) is the principal communications protocol in internetworking; it would not be an exaggeration to say that you cannot comprehend modern networking without a good understanding of IP.

### 2.7.1 IP Address

An IP address is a unique address that identifies a device on the internet or a local network. As it is described earlier, IP stands for Internet Protocol, which is the set of rules governing the format of data sent via the internet or local network. In essence, IP addresses are the identifier that allows information to be sent between devices on a network; they contain location information and make devices accessible for communication.

The internet needs a way to differentiate among different computers, routers and websites. IP addresses provide a way of doing so and form an essential part of how the Internet works. The IP address has two fundamental versions: IPv4 and IPv6. IPv4 is a common version that can be used in current networks. IPv4 (version 4) addresses are 32-bit integers that can be expressed in hexadecimal notation. The most common format, known as dotted quad or dotted decimal, is x.x.x.x, where each x can be any value between 0 and 255. For example, 192.0.2.146 is a valid IPv4 address.

### Activity 2.14

Do the following activities in a group:

1. Discuss different types of IP address notation which are illustrated in Figure 2.39.
2. Discuss the role of IP addresses in today's communication network.
3. How is IP address unique and universal?
4. Compare and contrast IPv4 and IPv6.

**Figure 2.39: Three different notations in IPv4 addressing**  
The image shows the IPv4 address 128.11.3.31 represented in three formats: Binary (10000000 00001011 00000011 00011111), Dot-decimal (128.11.3.31), and Hexadecimal (800B031F).

# 2.7.2 Classes of IP Address

When Internet addresses were standardized (the early 1980s), the Internet address space was divided into classes. TCP/IP defines five classes of IP addresses: Class A, B, C, D and E. Each class has a range of valid IP addresses. The value of the first octet determines the class.

**Figure 4.40: Classes of IP address**  
The image illustrates the three main classes (A, B, C) showing how the 32-bit address is divided: Class A has 8 bits for network and 24 bits for host; Class B has 16 bits for network and 16 bits for host; Class C has 24 bits for network and 8 bits for host.

IP addresses from the first three classes (A, B and C) can be used for host addresses. The other two classes are used for other purposes. Class D is used for multicast and Class E for experimental purposes. Figure 2.40 and table 2.1 show classes of IP addresses.

- **Class A:** The first octet is the network portion. Octets 2, 3 and 4 are for subnets/hosts. Class A starts with 0.
- **Class B:** The first two octets are the network portion. Octets 3 and 4 are for subnets/hosts. Class B starts with 10.
- **Class C:** The first three octets are the network portion. Octet 4 is for subnets/hosts. It starts with 110.

**Table 2.1: Classes of IP address**

| IP Address Class | High Order Bits | First Octet Address Range | Number of Bits in the Network Address |
|------------------|-----------------|---------------------------|----------------------------------------|
| Class A          | 0               | 0-127*                    | 8                                      |
| Class B          | 10              | 128-191                   | 16                                     |
| Class C          | 110             | 192-223                   | 24                                     |
| Class D          | 1110            | 224-239                   | 0                                      |
| Class E          | 1111            | 240-255                   | 0                                      |

*Note: Class A range 0-127 (where 0 and 127 are reserved)

## Network Masks

A network mask distinguishes which portion of the address identifies the network and which portion identifies the node.

### Default Masks

- Class A: 255.0.0.0
- Class B: 255.255.0.0
- Class C: 255.255.255.0

### Activity

Answer the following items:

1. Explain fundamental steps used to demonstrate IP address on Windows 10 computer.
2. Discuss the purpose of IP addresses.
3. Find the class of each of the following:
   - a. 00000001 00001011 00001011 11101111
   - b. 10000011 00000110 00110111 11111111
   - c. 10100111 11011011 10001011 01101111
   - d. 11110011 10011011 11111011 00001111
4. Rewrite the following IP addresses using the binary system:
   - a. 110.11.5.88
   - b. 12.74.16.18
   - c. 201.24.44.32
5. Open your computer on the network and identify the classes of the address and its subnet mask.
6. Explain how IP addresses are assigned.

### KEY CONCEPTS

An IP address is a unique address that identifies a device on the internet or a local network. IP (Internet Protocol) is the set of rules governing the format of data sent via the internet or local network. Netmasks (or network masks) are shorthand for referring to ranges of consecutive IP addresses in the Internet Protocol. They are used for defining networking rules. Every entity (server or client) communicating on the internet will have a unique IP address.

## 2.8 Unit Summary

A transmission medium can be broadly defined as anything that can carry information from a source to a destination. For example, the transmission medium for two people having a dinner conversation is the air. The air can also be used to convey the message in a smoke signal or semaphore. The transmission medium for a written message might be a mail carrier, a truck, or an airplane.

A guided medium provides a physical conduit from one device to another. Twisted-pair cable consists of two insulated copper wires twisted together. Twisted-pair cable is used for voice and data communications. Coaxial cable consists of a central conductor and a shield. Coaxial cable is used in cable TV networks and traditional Ethernet LANs. Fiber-optic cables are composed of a glass or plastic inner core surrounded by cladding, all encased in an outside jacket. Fiber-optic transmission is becoming increasingly popular due to its noise resistance, low attenuation and high bandwidth capabilities. Fiber-optic cable is used in backbone networks, cable TV networks and fast Ethernet LANs.

Unguided media (free space) transport electromagnetic waves without the use of a physical conductor. Wireless data are transmitted through ground propagation, sky propagation and line-of-sight propagation. Wireless waves can be classified as radio waves, microwaves or infrared waves. Radio waves are omnidirectional; microwaves are unidirectional. Microwaves are used for cellular phone, satellite and wireless LAN communications. Infrared waves are used for short-range communications such as those between a PC and a peripheral device. They can also be used for indoor LANs.

The nature and characteristics of a wireless network are different from those of a wired network. There are some issues in a wireless network that are negligible in a wired network. Wireless communication is one of the fastest-growing technologies and the demand for connecting devices without the use of cables is increasing everywhere. Wireless networks, as the name implies, interconnect devices without using wires; instead they use air, radio frequency (RF) as the main transmission medium.

Bluetooth technology is a short-range wireless communications technology to replace the cables connecting electronic devices, allowing a person to have a phone conversation via a headset, use a wireless mouse and synchronize information from a mobile phone to a PC, all using the same core system.

Telecommunications are the means of electronic transmission of information over distances. The information may be in the form of voice telephone calls, data, text, images or video. Telecommunications link form a channel through which information is transmitted from a sending device to a receiving device.

In data communication terminology, a transmission medium is a physical path between the transmitter and the receiver; that is, it is the channel through which data is sent from one place to another. Transmission media is broadly classified into the following types: guided and unguided media.

WLANs are flexible data communication systems that can be used for applications in which mobility is required. In the indoor business environment, although mobility is not an absolute requirement, WLANs provide more flexibility than that achieved by the wired LAN.

Cellular network provides communication between two devices. One or both may be mobile. A cellular service area is divided into cells. Advanced mobile phone system (AMPS) is a first-generation cellular phone system. Digital AMPS (D-AMPS) is a second-generation cellular phone system that is a digital version of AMPS. Global System for mobile communication (GSM) is a second-generation cellular phone system used in Europe. The third-generation cellular phone system provides universal personal communication. The fourth generation is the new generation of cellular phones that are becoming popular.

Satellite networks are defined as the orientation of various elements that establish communication through various nodes from one point of the earth to another. Any satellite network can provide both types of transmission technologies, i.e. point to point as well as broadcasting connections. A satellite network uses satellites to provide communication between any points on Earth.

An IP address is a unique address that identifies a device on the internet or a local network. IP (Internet Protocol) is the set of rules governing the format of data sent via the internet or local network.

## 2.9 Unit Review Exercise

### Part I: Write whether the following statements are true or false:

1. Fiber-optic cables are composed of a glass or plastic inner core surrounded by cladding, all encased in an outside jacket.
2. Guided media transport electromagnetic waves without the use of a physical conductor.
3. Infrared waves are used for short-range communications such as those between a PC and a peripheral device.
4. Twisted-pair cable is used for voice and data communications.
5. Satellite network does not influence the education system.
6. Data communication is a specialized subset of telecommunications that refers to the electronic collection, processing and distribution of data.
7. It is possible to achieve communication in the network without an IP address.

### Part II: Choose the correct answer among the alternatives

1. Which of the following cable consists of an inner copper core and a second conducting outer sheath?
   - A. Twisted-pair
   - B. Shielded twisted-pair
   - C. Coaxial
   - D. Fiber-optic

2. _____ cable can carry signals of higher frequency ranges than ____
   - A. Coaxial; twisted-pair
   - B. Twisted-pair; fiber-optic
   - C. Coaxial; fiber-optic
   - D. None of the above

3. _______ are used for cellular phone, satellite and wireless LAN communications.
   - A. Radio waves
   - B. Infrared waves
   - C. Microwaves
   - D. None of the above

4. The inner core of an optical fiber is _________ in composition.
   - A. copper
   - B. glass or plastic
   - C. bimetallic
   - D. liquid

5. What is the major factor that makes the coaxial cable less susceptible to noise than twisted-pair cable?
   - A. Insulating material
   - B. Inner conductor
   - C. Diameter of cable
   - D. Outer conductor

6. In fiber optics, the signal is __________
   - A. radio
   - B. light
   - C. infrared
   - D. very-low-frequency

7. Which of the following is not a guided medium?
   - A. Fiber-optic cable
   - B. Coaxial cable
   - C. Twisted-pair cable
   - D. Atmosphere

8. Microwaves are
   - A. omnidirectional
   - B. bidirectional
   - C. unidirectional
   - D. None of the above

9. Which of the following primarily uses guided media?
   - A. Radio broadcasting
   - B. Satellite communications
   - C. Local telephone system
   - D. Cellular telephone system

10. Transmission media are usually categorized as
    - A. determinate or indeterminate
    - B. fixed or unfixed
    - C. guided or unguided
    - D. metallic or nonmetallic

### Part III: Discuss the following

1. Write the two major categories of transmission media.
2. How is guide media different from unguided media?
3. What are the three major classes of guided media?
4. What is the function of the twisting in the twisted-pair cable?
5. Name the advantages of optical fiber over twisted-pair and coaxial cable.
6. Compare the medium of a wired LAN with that of a wireless LAN in today's communication environment.
7. Explain the role of the access points in WLAN.
8. What are the basic components of WLAN?
9. Compare and contrast Bluetooth and WLAN.
10. What is the relationship between a base station and a mobile switching center?
11. What are the functions of a mobile switching center?
12. What are the three types of orbits?
13. Explain uplink and downlink in the satellite system.
14. What is the difference between omnidirectional and unidirectional waves?
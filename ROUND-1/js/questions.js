// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: ".gif is an extension of",
  answer: "Image file",
  options: [
    "Image file",
    "Video file",
    "Audio file",
    "Word file"
  ]
},
  {
  numb: 2,
  question: "What does the letter 'S' stand for in the web terminology 'HTTPS'",
  answer: "Secure",
  options: [
    "Safe",
    "Short",
    "Secure",
    "Service"
  ]
},
  {
  numb: 3,
  question: "In which year was the ‘C’ programming language developed?",
  answer: "1972",
  options: [
    "1972",
    "1990",
    "1987",
    "1975"
  ]
},
  {
  numb: 4,
  question: "Which of the following is a logical operator?",
  answer: "All of the above",
  options: [
    "!",
    "&&",
    "||",
    "All of the above"
  ]
},
  {
  numb: 5,
  question: "Where is the memory allocated for the objects?",
  answer: "RAM",
  options: [
    "Cache",
    "ROM",
    "HDD",
    "RAM"
  ] 
},

  {
  numb: 6,
  question: "Which web browser is developed by the Google ",
  answer: "Chrome",
  options: [
    "IE",
    "FireFox",
    "Safari",
    "Chrome"
  ]
},
{
  numb: 7,
  question: "All keywords in C are in",
  answer: "LowerCase letters",
  options: [
    "LowerCase letters",
    "UpperCase letters",
    "CamelCase letters",
    "None"
  ]
},

{
  numb: 8,
  question: "Total number of function key in keyboard ?",
  answer: "12",
  options: [
    "13",
    "16",
    "12",
    "8"
  ]
},
{
  numb: 9,
  question: "How can you make an infinite loop in C?",
  answer: "All answers are right",
  options: [
    "while(1) { }",
    "loop: ... goto loop;",
    "for(;;) { }",
    "All answers are right"
  ]
},

{
  numb: 10,
  question: "Which one of the following is not a computer language",
  answer: "LOTUS",
  options: [
    "BASIC",
    "LOTUS",
    "C++",
    "JAVA"
  ]
},

{
  numb: 11,
  question: "The two major categories of software are:application software and ?",
  answer: "system software",
  options: [
    "UNIX software",
    "system software",
    "high-level languages",
    "CAD software"
  ] 
},

{
  numb: 12,
  question: "Which is correct with respect to size of the datatypes?",
  answer: "char < int < double",
  options: [
    "int > char > float",
    "char > int > float",
    "char < int < double",
    "double > char > int"
  ]
  
},

{
  numb: 13,
  question: "Subject Expert Committee on Covid-19 granted emergency use approval to which vaccine for children (2-18 years)?",
  answer: "Covaxin",
  options: [
    "Covishield",
    "Sputnik",
    "Pfizer",
    "Covaxin"
  ]
},

{
  numb: 14,
  question: "Which of the following is not a valid variable name declaration?",
  answer: "int 3_a;",
  options: [
    "int _a3;	",
    "int 3_a;",
    "int a_3;",
    "int _3a"
  ]
},

{
  numb: 15,
  question: "'Iot' refers to",
  answer: "Internet of Things",
  options: [
    "Intranet of Things",
    "Intranet of Teleservices",
    "International Organization of Teleservices",
    "Internet of Things"
  ]
},

{
  numb: 16,
  question: "The list of coded instructions is called",
  answer: "Computer program",
  options: [
    "Algorithm",
    "Flowchart",
    "Computer program",
    "Utility programs"
  ] 
},

{
  numb: 17,
  question: "The hottest planet in the solar system?",
  answer: "Venus",
  options: [
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter"
  ]
},

{
  numb: 18,
  question: "Which of the following is not valid representation in bits?",
  answer: "24-bit",
  options: [
    "8-bit",
    "24-bit",
    "32-bit",
    "64-bit"
  ]
},

{
  numb: 19,
  question: "Saving a file from the Internet onto your desktop is called",
  answer: "Downloading",
  options: [
    "Downloading",
    "Uploading",
    "Storing",
    "Transfering"
  ]
  
},

{
  numb: 20,
  question: "What happens if non static members are used in static member function?",
  answer: "Compile time error",
  options: [
    "Executes fine",
    "Compile time error",
    "Executes if that member function is not used",
    "Runtime error"
  ]
},

{
  numb: 21,
  question: "What is the full form of GST?",
  answer: "Goods and Services Tax",
  options: [
    "Goods and Supply Tax",
    "Goods and Services Tax",
    "General Sales Tax",
    "Government Sales Tax"
  ] 
},

{
  numb: 22,
  question: "Which of the following is not a valid C variable name?",
  answer: "int $main;",
  options: [
    "int number;	",
    "int variable_count;",
    "float rate;",
    "int $main;"
  ]  
},

{
  numb: 23,
  question: "Which one is 'text editor' for Microsoft Windows",
  answer: "Notepad",
  options: [
    "MS Word",
    "Ms Excel",
    "Wordpad",
    "Notepad"
  ]
},

{
  numb: 24,
  question: "A Program is sequence of ______ written in a programing language",
  answer: "Instructions",
  options: [
    "Lines",
    "Functions",
    "Instructions",
    "Codeword"
  ]
},

{
  numb: 25,
  question: "Which of the following statements best describes a white-hat hacker?",
  answer: "Security professional",
  options: [
    "Malicious hacker",
    "Former black hat",
    "Security professional",
    "Former grey hat"
  ]
},

{
  numb: 26,
  question: "The output printed by a computer through a printer on the paper is called",
  answer: "Hard copy",
  options: [
    "Hard copy",
    "Soft copy",
    "Virtual copy",
    "Both a and b"
  ]
},

{
  numb: 27,
  question: "Generally, which language is used to construct World Wide Web pages..",
  answer: "HTML",
  options: [
    "URL",
    "IRC",
    "HTML",
    "NIH"
  ]
},

{
  numb: 28,
  question: "'.INI' extension refers usually to what kind of file?",
  answer: "System file",
  options: [
    "System file",
    "UNIX software",
    "high-level languages",
    "CAD software"
  ]
},

{
  numb: 29,
  question: "The default page size for word document is ",
  answer: "A4",
  options: [
    "Letter",
    "Legal",
    "A3",
    "A4"
  ]
  
},

{
  numb: 30,
  question: "Binary system uses the power of",
  answer: "2",
  options: [
    "2",
    "4",
    "8",
    "16"
  ]
  
},

{
  numb: 31,
  question: "What's a web browser?",
  answer: "A software program that allows you to access sites on the World Wide Web",
  options: [
    "A computer that stores WWW files",
    "A person who likes to look at websites",
    "A kind of spider",
    "A software program that allows you to access sites on the World Wide Web",
  ]
},

{
  numb: 32,
  question: "Which one of the following is an Operating System?",
  answer: "Symbian",
  options: [
    "HP",
    "C",
    "Symbian",
    "Google"
  ]
},

{
  numb: 33,
  question: "A computer software that transforms assembly language to machine language is known as a ______",
  answer: "assembler",
  options: [
    "compiler",
    "assembler",
    "interpreter",
    "none of these"
  ]
},

{
  numb: 34,
  question: "Which is an Input device",
  answer: "Mouse",
  options: [
    "Monitor",
    "Printer",
    "Mouse",
    "None of the above"
  ]
  
},

{
  numb: 35,
  question: "Which of the following is not possible with an array in C programming language__",
  answer: "Dynamic Allocation",
  options: [
    "Declaration",
    "Definition",
    "Dynamic Allocation",
    "Array of Strings"
  ]
},

{
  numb: 36,
  question: "The GUI means ",
  answer: "Graphical User Interface",
  options: [
    "General User Interaction",
    "Graphical User Interface",
    "Guided User Interface",
    "General User Interface"
  ]
},

{
  numb: 37,
  question: "Indicate which of the following is not true about an interpreter?",
  answer: "Interpreter generates an object program from the source program",
  options: [
    "Interpreter generates an object program from the source program",
    "Interpreter is a kind of translator",
    "Interpreter analyses each source statement every time is to be executed",
    "None of the above"
  ] 
},

{
  numb: 38,
  question: "Guess Me, I am controller but doesn't exist in Electronics, I am a manager but doesn't work in company, made by linux but work for microsoft, who i am...",
  answer: "Git",
  options: [
    "Visual Studio",
    "Git",
    "Surface Mobile",
    "Dynamics Xbox"
  ]
},

{
  numb: 39,
  question: "A computer use which type of number system to calculate and to store data ",
  answer: "binary",
  options: [
    "decimal",
    "octal",
    "binary",
    "hexadecimal"
  ]
},

{
  numb: 40,
  question: "VoIP is not available ona ",
  answer: "TV's",
  options: [
    "Smartphones",
    " Personal Computers",
    "TV's",
    "None of above"
  ]
}




];
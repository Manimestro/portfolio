
const navElements =[
{title:"About",
link:"",
},  
{title:"Work",
link:"work",
},  
{title:"Projects",
link:"projects",
},
{title:"Uses",
link:"uses",
}
]

const contacts =[

    {link:"mailto:manikantatez@gmail.com?subject=Hello",
        name:"manikantatez@gmail.com",
     icon:<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="icons">
     <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
     <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
   </svg>
},{
    link:'tel:+916304764188',
    name:"+91 6304764188",
    icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icons">
    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
  </svg>
  
}
]
const socials=[
    {
        name:"Twitter",
        link:"https://twitter.com/manimaestro111",
        icon:<svg className="icons" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="twitter"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path></svg>
    },
    {
        name:"LinkedIn",
        link:'https://www.linkedin.com/in/manikanta-prasad-lopinti-068b0623b/',
        icon:<svg className="icons" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
    },{
        name:"GitHub",
        link:"https://github.com/Manimestro",
        icon:<svg className="icons" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"  viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
    }

]
const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ascensio - Intern",
    
      date: "March 2023 - May 2023",
      points: [
        "Creating a dynamic web application for an E-commerce company specializing in 3D printing. ",
        "Implementing responsive design upto 6 Devices, enabling users to upload 3D models and personalize them according to their preferences ",
        "gained some knowledge on techonoligies like Blender, Wix , Canva  "
      ],
    },
    {
      title: "Django Developer",
      iconBg: "#E6DEDD",
      company_name: "Rugua - Intern",
      date: "June 2021 - Ongoing",
      points: [
        "Developing and maintaining Backend Server using Django and DRF and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers ",
        "Developing effective Api's Using Django Rest Framework"
      ],
    },
    
  ];
// const technologies = [

//     
  
 




//     {
//       name: "Firebase",
//       icon: Firebase,
//     },

   
  
   

  
const skills=[
  {name:"Languages",
  items:[{name:"Python, C , C++",desc:"have a decent problem solving skills with experience in solving over 100 coding problems on platforms like LeetCode and GeeksforGeeks. Proficient in Python, with a strong grasp of object-oriented programming concepts. Comfortable working with Python in IDEs and utilizing C with Clang and C++ with g++ compilers"}
   ,{name:"Html, Css, Javascript",desc:"Proficient in HTML with a solid understanding of CSS, including CSS variables and responsive design using media queries. Skilled in JavaScript, specializing in asynchronous functions, JavaScript classes, and DOM manipulations for dynamic web interactions."}]
},{
  name:"Libraries",
  items:[{name:"React",desc:"Experienced in React with a strong hands-on approach. Proficient in utilizing various React hooks for efficient state management. Skilled in handling React state, allowing for dynamic and interactive user interfaces."},
  {name:"Redux Toolkit" ,desc:"Well-versed in Redux Toolkit, a simplified version of Redux. Proficient in utilizing reducers, managing the store, and implementing effective state management in React applications."},
  {name:"React Router",desc:"Experienced in client-side routing using React Router, particularly with version 6 that includes data layer APIs. Skilled in working with nested routes, loaders, and components for seamless navigation."}]
},
  {
    name:"Frameworks",
    items:[{name:"Django",desc:"Experienced in Django, utilizing both Django templates for server-side rendering and Django Rest Framework for building REST APIs. Proficient in working with views, serializers, and handling data interactions in a RESTful manner"},
    {name:"Next JS",desc:"Currently working on Next.js 13 as a full-stack application, leveraging its features for SEO-friendly content, server-side and client-side rendering, routing, and API integration"}]
  },
  {name: "Design Frameworks",
  items:[{desc:"Experienced in working with Tailwind CSS, including its various features such as filters, dark mode, and flex box , grids  customization options. Also familiar with Material Tailwind",name:"Tailwind"},
  {desc:"xperienced in working with Bootstrap, utilizing its container and grid system for creating responsive designs with 12-columns layout ",name:"Bootstrap"}]
 },
  {name:"Development Tools",
    items:[{desc:"Familiar with Git version control system, working with both local and remote repositories. known basic Git commands such as  rebase, merge, and stashing",name:"Git"}
    ,{desc:" Familiar with Firebase Realtime Database for real-time data synchronization and firestore, authentication and deployment ",name:"Firebase"}]
  }

]
const projects = [
  {
    name: "3D Personal Portfolio ",
    logo:<svg className="w-6 h-6" preserveAspectRatio="xMidYMid" width="2490" xmlns="http://www.w3.org/2000/svg" viewBox="-1.871 -0.4069999999999627 259.721 257.849"><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient><path d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z" fill="url(#a)"/><path d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z" fill="url(#b)"/></svg>,
    source_code_link:"",
    project_link:"https://portfolio-ee7f9.web.app",
    display_link:"portfolio-ee7f9.web.app",
  description:"Developed a 3D portfolio using React Three Fiber, incorporating customized 3D models created with Blender."
  },
  {
    name: "Mini LinkedIn",
    description:"Developed a LinkedIn-like app allowing users to post, and view others' posts with accounts..",
    logo:<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="3618.6" height="3618.6" viewBox="0 0 3618.6 3618.6" id="react"><path fill="#222" d="M0 0h3618.6v3618.6H0z"></path><circle cx="1806.5" cy="1807.1" r="302.6" fill="#00d8ff"></circle><path fill="none" stroke="#00d8ff" stroke-miterlimit="10" stroke-width="144.746" d="M1806.5 1191.9c406.2 0 783.6 58.3 1068.1 156.2 342.8 118 553.6 296.9 553.6 458.9 0 168.8-223.4 358.9-591.5 480.8-278.3 92.2-644.6 140.4-1030.2 140.4-395.4 0-769.7-45.2-1051.2-141.4-356.1-121.7-570.6-314.2-570.6-479.8 0-160.7 201.3-338.2 539.3-456 285.6-99.5 672.3-159.1 1082.5-159.1z"></path><path fill="none" stroke="#00d8ff" stroke-miterlimit="10" stroke-width="144.746" d="M1271 1501.3c202.9-351.9 442-649.7 669-847.2 273.5-238 533.8-331.2 674.1-250.3 146.2 84.3 199.3 372.8 121 752.7-59.2 287.2-200.4 628.5-393.1 962.6-197.5 342.5-423.7 644.2-647.6 840-283.3 247.7-557.3 337.3-700.7 254.6-139.2-80.3-192.4-343.3-125.7-695 56.4-297.4 198-662.1 403-1017.4z"></path><path fill="none" stroke="#00d8ff" stroke-miterlimit="10" stroke-width="144.746" d="M1271.5 2119.8c-203.5-351.6-342.1-707.4-399.9-1002.7-69.6-355.8-20.4-627.9 119.8-709 146.1-84.6 422.5 13.5 712.5 271 219.3 194.7 444.4 487.5 637.6 821.3 198.1 342.2 346.6 688.8 404.3 980.5 73.1 369.2 13.9 651.3-129.4 734.2-139.1 80.5-393.5-4.7-664.9-238.2-229.2-197.3-474.5-502.1-680-857.1z"></path></svg>,
    source_code_link: "https://github.com/Manimestro/Mini-LinkedIn",
    project_link:"https://linkedin-22b5e.web.app",
    display_link:"linkedin-22b5e.web.app"
  }   ,
   {
    name: "JUST_VANS ",
    description:"Created Just Vans app for van rentals. Users can browse, select, and host vans, with account registration",
    logo:<svg className="w-8 h-8" height="140" preserveAspectRatio="xMidYMid" viewBox="0 0 256 140" width="256" xmlns="http://www.w3.org/2000/svg"><path d="m78.0659341 92.5875806c12.8178615 0 23.2087919-10.3909298 23.2087919-23.2087912 0-12.8178615-10.3909304-23.2087912-23.2087919-23.2087912s-23.2087912 10.3909297-23.2087912 23.2087912c0 12.8178614 10.3909297 23.2087912 23.2087912 23.2087912zm-54.8571428 46.4175824c12.8178613 0 23.2087912-10.39093 23.2087912-23.208791 0-12.817862-10.3909299-23.2087914-23.2087912-23.2087914-12.8178615 0-23.2087913 10.3909294-23.2087913 23.2087914 0 12.817861 10.3909298 23.208791 23.2087913 23.208791zm209.5824177 0c12.817861 0 23.208791-10.39093 23.208791-23.208791 0-12.817862-10.39093-23.2087914-23.208791-23.2087914-12.817862 0-23.208791 10.3909294-23.208791 23.2087914 0 12.817861 10.390929 23.208791 23.208791 23.208791z"/><path d="m156.565464 70.3568084c-.742038-7.7539921-1.119887-14.2077829-7.05997-18.7436408-7.522856-5.7444674-16.044328-2.0171433-26.541031-5.8058708-10.314137-2.4951541-17.964463-11.6527241-17.964463-22.5678601 0-12.8347865 10.577888-23.2394367 23.626373-23.2394367 9.664257 0 17.973265 5.70747659 21.6332 13.8825477 5.60144 10.6395781 1.960916 21.4674941 8.998669 26.9215796 8.333247 6.4580622 19.567925 1.7287881 32.103867 7.8476139 4.028003 1.8509532 7.437475 4.7867166 9.839947 8.4251812 2.402472 3.6384645 3.797944 7.97963 3.797944 12.6413877 0 10.9151359-7.650326 20.072706-17.964462 22.5678601-10.496704 3.7887275-19.018175.0614034-26.541032 5.8058708-8.459476 6.459671-3.930614 17.266601-10.825154 28.682406-3.913189 7.51712-11.867233 12.662173-21.042979 12.662173-13.048485 0-23.626373-10.40465-23.626373-23.239436 0-9.323516 5.581887-17.364663 13.637891-21.0665694 12.535942-6.1188257 23.77062-1.3895517 32.103867-7.8476139 4.807348-3.7255764 5.823706-9.4727359 5.823706-16.9261923z" fill="#d0021b"/></svg>,
    source_code_link: "https://github.com/Manimestro/justvansApp",
    project_link:"https://snapchat-clone-cef03.web.app",
    display_link:"justvans-cef03.web.app"
  },
  {
    name: "3D Printing service page",
    description:"Created a 3D printing page enabling users to upload and customize models for industry printing",
    source_code_link: "https://github.com/Manimestro/3d-Printer-Page",
    project_link:"https://manimestro.github.io/3d-Printer-Page/",
    logo:<svg className="w-7 h-7" width="800px" height="800px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000">

</path>
    </g>
</svg>,
display_link:"github.io/3d-Printer-Page/"
  },
  {
    name: "Get your superhero",
    description:"Developed a superhero card game where users receive randomly generated cards with power stats from an API or by entering a name",

    logo:<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256" id="javascript"><path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></svg>,
    
    source_code_link: "https://github.com/Manimestro/SuperHerosApi",
    project_link:"https://getyoursuperheros--meikntyarasad.repl.co",
    display_link:"getyoursuperheros.repl.co"
  },

];


export {navElements,projects ,socials,contacts ,experiences ,skills}
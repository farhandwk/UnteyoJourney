import React from 'react'
import Farhan from "../../assets/farhan no bg.png"
import Raafki from "../../assets/atun no bg.png"
import Instagram from "../../assets/mdi_instagram.png"
import Gmail from "../../assets/mdi_gmail.png"
import Linkedin from "../../assets/mdi_linkedin.png"

function AboutDeveloper() {
    const Developer = [
        {
            nama: "Muhammad Raafki",
            foto: Raafki,
            Whatsapp: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=raafkieducation@@gmail.com",
            Instagram: "https://www.instagram.com/rsfakiii/",
            Linkedin: "https://www.linkedin.com/in/muhammad-raafky-1753b3285/",
            text: "Freelance Fullstack Developer and Data Analyst with a passion for expanding practical experience while delivering impactful solutions in a dynamic work environment.",
        },
        {
            nama: "Farhan Dwiki Ardhani",
            foto: Farhan,
            Whatsapp: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=farhandwiki15@gmail.com",
            Instagram: "https://www.instagram.com/farhan_dwiar/",
            Linkedin: "https://www.linkedin.com/in/farhanardhani/",
            text: "Freelance Fullstack Developer & Data Analyst Committed to continuous learning and making contributions. Utilizing a research-driven approach and data analysis before making decisions.",
        }
    ]

  return (
    <div className='w-[100%] h-[100%] 
    bg-[black] text-[white]
    flex flex-col items-center justify-center
    
    md:h-auto
    md:p-[50px]
    md:gap-[20px]
    '>
        <div className='text-center mt-[50px]
        
        md:mt-[0px]
        '>
            <h1 className='Helvetica text-[30px]
            
            md:text-[60px]

            lg:text-[50px]
            '>About</h1>
            <h1 className='HelveticaBold text-[35px]
            
            md:text-[65px]

            lg:text-[55px]
            '>Developer</h1>
        </div>
        <div className='
        flex flex-col
        w-[100%] h-auto

        lg:flex-row
        lg:itemss-center lg:justify-around
        '>
        {Developer.map((item, index) => (
            <li key={index}
            className={`
                bg-[#fefefe]
                w-[200px] h-[350px] rounded-[10px]
                flex flex-col justify-center items-center m-[20px]
                ${index === 0 ? 'self-start' : 'self-end'}

                md:w-[350px] md:h-[550px]
                md:gap-[10px]
                `}
            >
                <img src={item.foto}
                className={`w-[165px] h-[130px] pl-[20px] pr-[20px] pt-[10p]
                z-[2] bg-[black] 
                ${index === 0 ? 'self-start rounded-r-[10px]' : 'self-end rounded-l-[10px]'}
                
                md:w-[285px] md:h-[250px]
                `}
                ></img>
                <h2 className='
                HelveticaBold
                text-[black] 

                md:text-[25px]
                '>{item.nama}</h2>
                <div className='flex flex-row
                w-[auto]
                gap-[10px]

                md:gap-[20px]
                '>
                    <a href={item.Whatsapp}>
                        <img src={Gmail}
                        className='
                        md:w-[35px]
                        '
                        ></img>
                    </a>
                    <a href={item.Instagram}>
                        <img src={Instagram}
                        className='
                        md:w-[35px]
                        '
                        ></img>
                    </a>
                    <a href={item.Linkedin}>
                        <img src={Linkedin}
                        className='
                        md:w-[35px]
                        '
                        ></img>
                    </a>
                </div>
                <p className='
                Helvetica
                text-[black] text-[10px]
                w-[140px] 

                md:text-[15px]
                md:w-[270px]
                '>
                    {item.text}
                </p>
                
            </li>
        ))}
        </div>
    </div>
  )
}

export default AboutDeveloper
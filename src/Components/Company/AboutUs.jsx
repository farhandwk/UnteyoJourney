import React from 'react'
import "./Company.css"
import Header from "../Header/Header"
import dummyGambar from "../../assets/Post/Post1.png"
import atun from "../../assets/atun no bg.png"

function AboutUs() {
    const coreValues = [
        {id: '1', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        {id: '2', img: atun, title: 'Inovation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ]

  return (
    <div className='bg-[red] w-screen w-max-screen h-auto'>
        <Header></Header>
        <div className='flex flex-col justify-center items-center
        mt-[70px]
        '>
            <h3 className='HelveticaBold text-[white] text-[25px]'>About Us</h3>
            <div className='flex felx-row gap-[20px]'>
                <img src={dummyGambar} className='
                w-[100px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px]
                '></img>
                <img src={dummyGambar} className='
                w-[100px]
                '></img>
            </div>
            <div className='HelveticaBold text-[white] p-[22px]
            flex flex-col gap-[10px]
            '>
                <h4 className='text-[20px]'>What Is Unteyo Journey?</h4>
                <p className='text-[15px]'>
                    Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.
                </p>
                <p className='text-[15px]'>
                    Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='HelveticaBold text-[white]
            text-[25px]
            '>Core Values</h3>
            <div className='
            Scrolled
            flex flex-row gap-[20px]'>
                {coreValues.map((item) => (
                    <div key={item.id} className='
                    coreValue
                    w-[250px]
                    Helvetica text-white 
                    flex flex-col items-center border-[2px]
                    w-min-content
                    '>
                        <img src={item.img}></img>
                        <h4 className='
                        HelveticaBold
                        text-[20px] 
                        '>{item.title}</h4>
                        <p className='
                        text-[15px]
                        '>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutUs
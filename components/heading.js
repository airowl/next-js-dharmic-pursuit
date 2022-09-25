import React from 'react'
import Button from './button'


const Heading = ({theme}) => {

  // theme light or dark

  return (
    <section id="heading" className={`pb-24 " ${theme ? "" : "bg-main"}`}>
          <div className="w-screen md:h-screen container mx-auto md:flex md:flex-row-reverse md:grow md:items-center">
            <div className="shape-a md:w-1/2 overflow-hidden relative w-full">
                  {/*<div className="shape-b flex items-center overflow-hidden md:hidden">
                      {
                          shapeDatas.map((e, i) => (
                              <div className="shape bg-second/[.2] text-second flex flex-col justify-center my-10 mx-8" key={i}>
                                  <h2 className="text-4xl">
                                      {e.integer}
                                  </h2>
                                  <p className="text-second">
                                      {e.text}
                                  </p>
                              </div>
                          ))
                      }
                  </div>
                  {
                      shapeDatasMd.map((e, i) => (
                          <div className="shape bg-second/[.2] text-second flex-col justify-center my-10 mx-8 hidden md:flex md:flex-col" key={i}>
                              <h2 className="text-4xl">
                                  {e.integer}
                              </h2>
                              <p className="text-second">
                                  {e.text}
                              </p>
                          </div>
                      ))
                  }*/}
              </div>
              <div className={`px-10 mt-10 md:w-1/2 ${theme ? "" : "text-white"}`}>
                  <h3 className={`text-base md:text-2xl text-second text-center md:text-left ${theme ? "" : "hidden"}`}>
                      Heading
                  </h3>
                  <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left my-5">
                      WELCOME! WE’RE DHARMIC PURSUIT! YOUR DAILY SOURCE OF MONEY TIPS AND VALUE INVESTING.
                  </h2>
                  <p className={`my-5 text-justify ${theme ? "text-sixth" : ""}`}>
                      We’re into building a massive community of savers and investors who want to achieve financial wellness.
                  </p>
                  <p className={`my-5 text-justify ${theme ? "text-sixth" : ""}`}>
                      With the help of our affiliate partners, we are dedicated to provide you the best financial solutions that you can get to improve your personal finance and investing strategy.
                  </p>
                  
                  <Button 
                      url="#"
                      style="light"
                  >
                      Read About Us
                  </Button>
              </div>
          </div>
    </section>
  )
}

export default Heading
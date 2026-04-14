import React from 'react'
import pach from "../assets/йййй 1.png"
export const Banner = () => {
  return (
    <div className='banner'>
        <section className='max-w-[1400px] m-auto flex items-center justify-between pt-[30px]'>
            <section className='flex items-center flex-col gap-[20px]'>
                <h1 className='text-[50px] text-white'>Новинка в России</h1>
            <p className='text-[30px] text-white'>Север - теплоизоляция <br /> для сурового климата</p>
            <h2 className='text-[40px] text-white'>от <span className='text-[60px]'>850 ₽</span> за <span className='text-[60px]'>3м<sup>2</sup></span></h2>
            <button className='w-[250px] h-[50px] text-white bg-blue-600'>Подробнее</button>
            </section>
            <img src={pach} alt="" />
        </section>
    </div>
  )
}

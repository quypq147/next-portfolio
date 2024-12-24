import React from 'react'
import Image from 'next/image'
import fbIco from '@/public/images/socials/facebook.svg';
import twIco from '@/public/images/socials/twitter.svg';
import igIco from '@/public/images/socials/instagram.svg';
import lnIco from '@/public/images/socials/linkedin.svg';
import Link from 'next/link';

function Footer() {

  const socials = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/',
      icon: twIco
    },
    {
      name: 'Facebook',
      link: 'https://facebook.com/',
      icon: fbIco
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/',
      icon: igIco
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/',
      icon: lnIco
    }
  ]

  return (
    <section className='footer p-10 grid justify-center items-center'>
      <div className='footer-social gap-5 flex justify-center'>
        {socials.map((social, index) => (
          <Image key={index} width={24} height={24} src={social.icon} alt={social.name} />
        ))}
      </div>
      <p className='text-1xl'>Copyright ©2020 All rights reserved </p>
    </section>
  )
}

export default Footer
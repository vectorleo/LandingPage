function FooterSection() {

  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }


  return (
    <footer className="bg-gray-50">
      <div className="Container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* brand col */}
          <div className="lg:col-span-4">
            <div className="flex gap-4 items-center mb-3">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-70 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity -m-2.5"></div>
              </div>
              <span className="text-xl font-medium">The Next Design</span>
            </div>
            <p className=" text-gray-600 mb-6 w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vitae facere. Vero sequi voluptas eius?</p>

            <div className="flex gap-4">
              <a href="" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
              text-gray-600 hover:bg-blue-600 hover:text-blue-50 transition-all duration-200"><i className="fa-brands fa-facebook-f"></i></a>

              <a href="" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
              text-gray-600 hover:bg-black hover:text-white transition-all duration-200"><i className="fa-brands fa-x-twitter"></i></a>

              <a href="" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
              text-gray-600 hover:bg-blue-800 hover:text-blue-100 transition-all duration-200"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>

          </div>

          {/* footer nav */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category,link],categoryIndex)=> (
                <div key={category}>
                  <h3 className="font-medium text-lg mb-4 uppercase">{category}</h3>
                  <ul className="space-y-3">
                    {link.map((link,index) =>(
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-gray-900">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className=" border-t border-gray-200 mt-12 lg:pt-8 pt-16 pb-8"> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">Copyrigth © {new Date().getFullYear()} A Web Service</p>
            <p className="text-gray-600 "> Coded by Onwuka Victor Leo</p>
          </div>
        </div>
      </div>


    </footer>
  )
}

export default FooterSection
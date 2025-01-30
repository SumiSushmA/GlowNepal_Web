import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContextProvider'

const Stylists = () => {

  const { category } = useParams()

  const [filterStylists, setFilterStylists] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { stylists } = useContext(AppContext)

  const applyFilter = () => {
    if (category) {
      setFilterStylists(stylists.filter(stylist => stylist.category === category))
    } else {
      setFilterStylists(stylists)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [stylists, category])

  return (
    <div>
      <p className='text-gray-600'>Browse through our professional stylists.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => category === 'Hair Stylist' ? navigate('/stylists') : navigate('/stylists/Hair Stylist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Hair Stylist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Hair Stylist</p>
          <p onClick={() => category === 'Makeup Artist' ? navigate('/stylists') : navigate('/stylists/Makeup Artist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Makeup Artist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Makeup Artist</p>
          <p onClick={() => category === 'Nail Technician' ? navigate('/stylists') : navigate('/stylists/Nail Technician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Nail Technician' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Nail Technician</p>
          <p onClick={() => category === 'Facial & Skincare' ? navigate('/stylists') : navigate('/stylists/Facial & Skincare')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Facial & Skincare' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Facial & Skincare</p>
          <p onClick={() => category === 'Massage Therapist' ? navigate('/stylists') : navigate('/stylists/Massage Therapist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Massage Therapist' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Massage Therapist</p>
          <p onClick={() => category === 'Eyebrow & Lash Expert' ? navigate('/stylists') : navigate('/stylists/Eyebrow & Lash Expert')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Eyebrow & Lash Expert' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Eyebrow & Lash Expert</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterStylists.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stylists

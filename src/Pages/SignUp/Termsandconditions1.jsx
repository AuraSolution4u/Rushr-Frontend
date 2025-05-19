import React from 'react'
import { Strings } from '../../Strings/Strings'
import { Navigate, useNavigate } from 'react-router-dom'


const Termsandconditions = () => {

    const navigate = useNavigate();
  return (
    <div className='w-full h-[2431px] bg-bglargescreen flex items-center'>
        {/* <div className='w-[1338px] h-[1498px] bg-white flex-row'>
            <p>{Strings.rushr_terms_of_use}</p>
            
        </div> */}


<div className="max-w-4xl mx-auto p-6 bg-bglargescreen  ">
<button onClick={()=>navigate("/signup")} className='relative bottom-11'>Back</button>
      <p className='text-[24px] font-[300] text-[#282828]'>{Strings.rushr_terms_of_use}</p>
      <p className=" mt-6 text-[24px] font-[300] text-[#282828] text-left">
        {Strings.Terms}
      </p>

      {/** Sections */}
      <div className="mt-8 space-y-6 bg-bglargescreen">
        {/** Section 1 */}
        <section>
          <p className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Background}</p>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Background_a}</li>
            <li>{Strings.Background_b}</li>
            <li>{Strings.Background_c}</li>
            <li>{Strings.Background_d}</li>
          </ul>
        </section>

        {/** Section 2 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Requirements}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Requirements_a}</li>
            <li className='list-disc'>{Strings.Requirements_a_bullet}</li>
            <li>{Strings.Requirements_b}</li>
            <li className='list-disc'>{Strings.Requirements_b_bullet}</li>
            <li>{Strings.Requirements_c}</li>
            <li className='list-disc'>{Strings.Requirements_c_bullet}</li>
            <li>{Strings.Requirements_d}</li>
            <li className='list-disc'>{Strings.Requirements_d_bullet}</li>
            <li>{Strings.Requirements_e}</li>
            <li className='list-disc'>{Strings.Requirements_e_bullet}</li>
          </ul>
        </section>

        {/** Section 3 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Prohibited_Uses}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Prohibited_Uses_a}</li>
            <li>{Strings.Prohibited_Uses_b}</li>
            <li>{Strings.Prohibited_Uses_c}</li>
            <li>{Strings.Prohibited_Uses_d}</li>
            <li>{Strings.Prohibited_Uses_e}</li>
            <li>{Strings.Prohibited_Uses_f}</li>
            <li>{Strings.Prohibited_Uses_g}</li>
           
          </ul>
        </section>

        {/*  Section 4 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Account_Creation_and_Verification}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Account_Creation_and_Verification_a}</li>
            <li>{Strings.Account_Creation_and_Verification_b}</li>
            <li>{Strings.Account_Creation_and_Verification_c}</li>
          </ul>
        </section>

        {/*  Section 5 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Data_and_Privacy}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Data_and_Privacy_a}</li>
            <li>{Strings.Data_and_Privacy_b}</li>
            <li>{Strings.Data_and_Privacy_c}</li>
          </ul>
        </section>

        {/*  Section 6 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Content_and_User_Responsibilities}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Content_and_User_Responsibilities_a}</li>
            <li className='list-disc'>{Strings.Content_and_User_Responsibilities_bullet_a}</li>
            <li>{Strings.Content_and_User_Responsibilities_b}</li>
            <li className='list-disc'>{Strings.Content_and_User_Responsibilities_bullet_b}</li>
            <li>{Strings.Content_and_User_Responsibilities_c}</li>
            <li className='list-disc'>{Strings.Content_and_User_Responsibilities_bullet_c}</li>
            
          </ul>
        </section>

        {/*  Section 7*/}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Violations_and_Enforcement}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Violations_and_Enforcement_a}</li>
            <li className='list-disc'>{Strings.Violations_and_Enforcement_bullet_a}</li>
            <li>{Strings.Violations_and_Enforcement_b}</li>
            <li className='list-disc'>{Strings.Violations_and_Enforcement_bullet_b}</li>
            <li>{Strings.Violations_and_Enforcement_c}</li>
            <li className='list-disc'>{Strings.Violations_and_Enforcement_bullet_c}</li>
         </ul>
        </section>

        {/*  Section 8 */}
        <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Disclaimer_of_Liability}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Disclaimer_of_Liability_a}</li>
            <li>{Strings.Disclaimer_of_Liability_b}</li>
            
          </ul>
        </section>

          {/*  Section 9 */}
          <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Contact_Information}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Contact_Information_line}</li>
            <li>{Strings.Contact_Information_mailid}</li>
            <li>{Strings.Contact_Information_website}</li>
            
          </ul>
        </section>

         {/*  Section 10 */}
         <section>
          <h2 className="text-[18px] font-[600] text-[#282828] text-left">{Strings.Acceptance_of_Terms}</h2>
          <ul className="text-[14px] font-[400] pl-6 text-[#282828]">
            <li>{Strings.Acceptance_of_Terms_line}</li>
         
            
          </ul>
        </section>


        























      </div>
      <button onClick={()=>navigate("/Termsandconditions2")} className='relative left-[794px] top-[50px]'>Next</button>
    </div>
    
        
      
    </div>
  )
}

export default Termsandconditions

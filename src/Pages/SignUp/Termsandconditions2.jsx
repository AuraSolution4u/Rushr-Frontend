import React from "react";
import { Strings } from "../../Strings/Strings";
import { Navigate, useNavigate } from "react-router-dom";

const Termsandconditions = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-bglargescreen flex items-center">
      <div className="max-w-4xl mx-auto p-6 bg-bglargescreen  ">
        <p className=" mt-36 text-[32px] font-[600] text-[#282828] text-left">
          {Strings.TNC2}
        </p>

        {/** Sections */}
        <div className="mt-8 space-y-6">
          {/** Section 1 */}
          <section>
            <p className="text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Introduction}
            </p>
            <p className="mt-4 text-[14px] font-[400] pl-6 text-[#282828] text-left">
              {Strings.Introduction_text}
            </p>
          </section>

          {/** Section 2 */}
          <section>
            <h2 className="text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Code_of_Conduct}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828] flex flex-col gap-4 ">
              <div>
                <p>{Strings.Respect_for_Others}</p>
                <p>{Strings.Respect_for_Others_line}</p>
              </div>
              <div>
                <p>{Strings.Integrity_and_Accountability}</p>
                <p>{Strings.Integrity_and_Accountability_line}</p>
              </div>
              <div>
                <p>{Strings.Confidentiality}</p>
                <p>{Strings.Confidentiality_line}</p>
              </div>
              <div>
                <p>{Strings.Privacy_Data_Protection}</p>
                <p>{Strings.Privacy_Data_Protection_line}</p>
              </div>
              <div>
                {" "}
                <p>{Strings.Compliance_with_Laws_and_Policies}</p>
                <p>{Strings.Compliance_with_Laws_and_Policies_line}</p>
              </div>
              <div>
                {" "}
                <p>{Strings.Academic_Integrity}</p>
                <p>{Strings.Academic_Integrity_line}</p>
              </div>
              <div>
                <p>{Strings.Reporting_Violations}</p>
                <p>{Strings.Reporting_Violations_line}</p>
              </div>
              <div>
                {" "}
                <p>{Strings.Enforcement_and_Disciplinary_Actions}</p>
                <p>{Strings.Enforcement_and_Disciplinary_Actions_line}</p>
              </div>
              <div>
                <p>{Strings.Appeals}</p>
                <p>{Strings.Appeals_line}</p>
              </div>
            </div>
          </section>

          {/** Section 3 */}
          <section>
            <h2 className=" text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Compliance_Policies}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828] flex flex-col gap-4 ">
              <div>
                <p>{Strings.Posting_and_Content_Guidelines}</p>
                <p>{Strings.Posting_and_Content_Guidelines_line}</p>
              </div>

              <div>
                <p>{Strings.Messaging_Policy}</p>
                <p>{Strings.Messaging_Policy_line}</p>
              </div>
              <div>
                <p>{Strings.Reporting_Policy}</p>
                <p>{Strings.Reporting_Policy_line}</p>
              </div>
              <div>
                <p>{Strings.Flagging_and_Appeals}</p>
                <p>{Strings.Flagging_and_Appeals_line}</p>
              </div>
              <div>
                <p>{Strings.Audit_Logs}</p>
                <p>{Strings.Audit_Logs_line}</p>
              </div>
              <div>
                <p>{Strings.Privacy_and_Data_Protection}</p>
                <p>{Strings.Privacy_and_Data_Protection_line}</p>
              </div>
              <div>
                {" "}
                <p>{Strings.User_Account_Management}</p>
                <p>{Strings.User_Account_Management_line}</p>
              </div>
            </div>
          </section>

          {/*  Section 4 */}
          <section>
            <h2 className="text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Disciplinary_Actions}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828]">
              <p>{Strings.Disciplinary_Actions_line}</p>
            </div>
          </section>

          {/*  Section 5 */}
          <section>
            <h2 className=" text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Appeals_and_Review_Process}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828]">
              <p>{Strings.Appeals_and_Review_Process_line}</p>
            </div>
          </section>

          {/*  Section 6 */}

          <section>
            <h2 className="text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Policy_Review_and_Updates}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828]">
              <p>{Strings.Policy_Review_and_Updates_line}</p>
            </div>
          </section>

          {/*  Section 7*/}
          <section>
            <h2 className="text-[18px] font-[600] text-[#282828] text-left">
              {Strings.Acknowledgment}
            </h2>
            <div className="mt-4 text-[14px] font-[400] pl-6 text-[#282828]">
              <p>{Strings.Acknowledgment_line}</p>
            </div>
          </section>
        </div>
        <button
          onClick={() => navigate("/termsandconditions")}
          className="relative left-[794px] top-[50px]"
        >
          {Strings.back}
        </button>
      </div>
    </div>
  );
};

export default Termsandconditions;

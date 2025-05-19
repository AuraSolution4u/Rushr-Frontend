import handleScrollToTop from "../../utils/SmoothScroll"
import StepperForm from "../MyChapter/StepperForm"



const AdminNewChapter = () => {
  handleScrollToTop()
  return (
    <div className="flex scrollbar-hide overflow-scroll h-[100vh] w-[110%]  pt-[120px]">
        <StepperForm />
    </div>
  )
}

export default AdminNewChapter
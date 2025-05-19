// import * as React from "react";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";

// import Typography from "@mui/material/Typography";
// import ChapterDetails from "./ChapterDetails";
// import OtherInformation from "./OtherInformation";
// import ReviewAndPublish from "./ReviewAndPublish";

// const steps = ["Chapter Details", "Other Information", "Review & Publish"];

// export default function StepperForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [isSubmitting,setIsSubmitting] = useState(false)

//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     if (isSubmitting) return
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//     setIsSubmitting(false);
//   };

//   const ActiveForm = () => {
//     switch (activeStep) {
//       case 0:
//         return <ChapterDetails handleNext={handleNext} />;
//       case 1:
//         return (
//           <OtherInformation
//             handleNext={() => handleNext()}
//             handleBack={() => handleBack()}
//           />
//         );
//       case 2:
//         return <ReviewAndPublish handleBack={() => handleBack()} />;
//       default:
//         return null;
//     }
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper  activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       <React.Fragment>
//         {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
//         {ActiveForm()}
//         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//           <Box sx={{ flex: "1 1 auto" }} />
//         </Box>
//       </React.Fragment>
//     </Box>
//   );
// }


import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import ChapterDetails from "./ChapterDetails";
import OtherInformation from "./OtherInformation";
import ReviewAndPublish from "./ReviewAndPublish";
import handleScrollToTop from "../../utils/SmoothScroll";

const steps = ["Chapter Details", "Other Information", "Review & Publish"];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
 
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    handleScrollToTop()
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const ActiveForm = () => {
    switch (activeStep) {
      case 0:
        return <ChapterDetails handleNext={() => handleNext()} />;
      case 1:
        return (
          <OtherInformation
            handleNext={() => handleNext()}
            handleBack={() => handleBack()}
          />
        );
      case 2:
        return <ReviewAndPublish handleBack={() => handleBack()} />;
      default:
        return null;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
             
          );
        })}
      </Stepper>

      <React.Fragment>
        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
        {ActiveForm()}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
        </Box>
      </React.Fragment>
    </Box>
  );
}
